"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useSupabase } from "@/components/providers/supabase-provider"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  const { supabase } = useSupabase()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [theme, setTheme] = useState("system")
  const [emailNotifications, setEmailNotifications] = useState("all")

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      toast({
        title: "Xatolik",
        description: "Parollar mos kelmadi",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) throw error

      toast({
        title: "Muvaffaqiyatli",
        description: "Parol muvaffaqiyatli yangilandi",
      })
      
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      toast({
        title: "Xatolik",
        description: error instanceof Error ? error.message : "Parolni yangilashda xatolik yuz berdi",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleThemeChange = (value: string) => {
    setTheme(value)
    // Theme is handled by the ThemeProvider, this is just for UI state
  }

  const handleNotificationChange = (value: string) => {
    setEmailNotifications(value)
    toast({
      title: "Muvaffaqiyatli",
      description: "Bildirishnoma sozlamalari yangilandi",
    })
  }

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <h1 className="text-3xl font-bold">Sozlamalar</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Parol</CardTitle>
          <CardDescription>Parolingizni o'zgartiring</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">Yangi parol</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Yangi parolni kiriting"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Parolni tasdiqlang</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Yangi parolni tasdiqlang"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Yangilanmoqda..." : "Parolni yangilash"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ko'rinish</CardTitle>
          <CardDescription>CarInfo qurilmangizda qanday ko'rinishini sozlang</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="theme">Mavzu</Label>
            <Select value={theme} onValueChange={handleThemeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Mavzuni tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Yorug'</SelectItem>
                <SelectItem value="dark">Qorong'i</SelectItem>
                <SelectItem value="system">Tizim</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bildirishnomalar</CardTitle>
          <CardDescription>Bildirishnoma sozlamalarini boshqaring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="notifications">Elektron pochta bildirishnomalari</Label>
            <Select value={emailNotifications} onValueChange={handleNotificationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Bildirishnoma turini tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha bildirishnomalar</SelectItem>
                <SelectItem value="important">Faqat muhimlari</SelectItem>
                <SelectItem value="none">Hech qanday</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 