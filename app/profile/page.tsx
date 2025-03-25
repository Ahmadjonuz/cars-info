"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSupabase } from "@/components/providers/supabase-provider"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const { supabase } = useSupabase()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      setLoading(true)
      console.log("Foydalanuvchi ma'lumotlari yuklanmoqda...")
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Foydalanuvchini olishda xatolik:", userError.message)
        throw userError
      }

      if (!user) {
        console.log("Foydalanuvchi topilmadi, login sahifasiga yo'naltirilmoqda")
        router.push('/auth/login')
        return
      }

      console.log("Foydalanuvchi topildi:", user.id)
      setEmail(user.email || "")

      // Get profile data
      console.log("Profil ma'lumotlari yuklanmoqda:", user.id)
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)

      if (error) {
        console.error("Profilni olishda xatolik:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        throw error
      }

      console.log("Profil ma'lumotlari:", data)

      if (data && data.length > 0) {
        const profile = data[0]
        setFullName(profile.full_name || "")
        setPhone(profile.phone || "")
      } else {
        // Create a new profile if it doesn't exist
        console.log("Profil topilmadi, yangi profil yaratilmoqda:", user.id)
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            full_name: "",
            phone: "",
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          })
          .select()
          .single()

        if (insertError) {
          console.error("Profil yaratishda xatolik:", {
            message: insertError.message,
            details: insertError.details,
            hint: insertError.hint,
            code: insertError.code
          })
          throw insertError
        }

        console.log("Yangi profil yaratildi:", newProfile)
      }
    } catch (error: any) {
      console.error("Profilni olishda xatolik:", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        details: error?.details,
        hint: error?.hint,
        code: error?.code
      })
      toast({
        title: "Xatolik",
        description: "Profilni yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile() {
    try {
      setLoading(true)
      console.log("Joriy foydalanuvchi olinmoqda...")
      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (userError) {
        console.error("Foydalanuvchini olishda xatolik:", userError.message)
        throw userError
      }

      if (!user) {
        console.log("Foydalanuvchi topilmadi, login sahifasiga yo'naltirilmoqda")
        router.push('/auth/login')
        return
      }

      console.log("Profil yangilanmoqda:", user.id)
      console.log("Yangilanadigan ma'lumotlar:", {
        full_name: fullName,
        phone: phone,
        updated_at: new Date().toISOString()
      })

      // First check if profile exists
      const { data: existingProfile, error: checkError } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single()

      if (checkError) {
        console.error("Profilni tekshirishda xatolik:", {
          message: checkError.message,
          details: checkError.details,
          hint: checkError.hint,
          code: checkError.code
        })
        throw checkError
      }

      if (!existingProfile) {
        console.log("Profil mavjud emas, yangi profil yaratilmoqda")
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            full_name: fullName,
            phone: phone,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          })
          .select()
          .single()

        if (insertError) {
          console.error("Profil yaratishda xatolik:", {
            message: insertError.message,
            details: insertError.details,
            hint: insertError.hint,
            code: insertError.code
          })
          throw insertError
        }

        console.log("Yangi profil yaratildi:", newProfile)
      } else {
        console.log("Mavjud profil yangilanmoqda")
        const { data, error } = await supabase
          .from('profiles')
          .update({
            full_name: fullName,
            phone: phone,
            updated_at: new Date().toISOString(),
          })
          .eq('id', user.id)
          .select()
          .single()

        if (error) {
          console.error("Profilni yangilashda xatolik:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          })
          throw error
        }

        console.log("Profil muvaffaqiyatli yangilandi:", data)
      }

      toast({
        title: "Muvaffaqiyatli",
        description: "Profil muvaffaqiyatli yangilandi!",
      })
    } catch (error: any) {
      console.error("Profilni yangilashda xatolik:", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        details: error?.details,
        hint: error?.hint,
        code: error?.code
      })
      toast({
        title: "Xatolik",
        description: error?.message || "Profilni yangilashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/login')
    } catch (error) {
      console.error("Tizimdan chiqishda xatolik:", error)
      toast({
        title: "Xatolik",
        description: "Tizimdan chiqishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
          <CardDescription>Profil ma'lumotlarini yangilash</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault()
            updateProfile()
          }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Elektron pochta</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="fullName">To'liq ism</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="To'liq ismingizni kiriting"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon raqamingizni kiriting"
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Yangilanmoqda..." : "Profilni yangilash"}
              </Button>
            </div>
          </form>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Hisob harakatlari</h3>
            <Button
              variant="destructive"
              onClick={signOut}
              className="w-full"
            >
              Chiqish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 