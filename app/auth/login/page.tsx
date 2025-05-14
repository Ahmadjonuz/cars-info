"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: "Kirish ma'lumotlari noto'g'ri",
            description: "Email yoki parol noto'g'ri. Iltimos, ma'lumotlarni tekshirib, qayta urinib ko'ring.",
            variant: "destructive",
          })
        } else if (error.message.includes('Email not confirmed')) {
          toast({
            title: "Email tasdiqlanmagan",
            description: "Iltimos, emailingizni tasdiqlang. Tasdiqlash xati yuborilgan.",
            variant: "destructive",
          })
        } else {
          toast({
            title: "Xatolik",
            description: "Tizimga kirishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
            variant: "destructive",
          })
        }
        return
      }

      if (data?.user) {
        await fetch('/api/auth/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ event: 'SIGNED_IN', session: data.session }),
        })

        toast({
          title: "Muvaffaqiyatli",
          description: "Tizimga muvaffaqiyatli kirdingiz.",
        })
        
        router.refresh()
        router.push("/")
      }
    } catch (error: any) {
      console.error('Login error:', error)
      toast({
        title: "Xato",
        description: "Tizimga kirishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen w-full py-12 flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md px-4"
      >
        <Card className="w-full backdrop-blur-sm bg-card/80">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tizimga kirish
            </CardTitle>
            <CardDescription>
              Avtomobillar katalogiga kirish uchun tizimga kiring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <motion.div variants={inputVariants} className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Elektron pochta
                </Label>
                <Input
                  id="email"
                  placeholder="mail@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>

              <motion.div variants={inputVariants} className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Parol
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.div
                variants={inputVariants}
                className="pt-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" 
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? "Kirish..." : "Kirish"}
                </Button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-center text-sm"
            >
              Hisobingiz yo'qmi?{" "}
              <Link 
                href="/auth/register" 
                className="text-primary hover:text-primary/90 hover:underline transition-colors"
              >
                Ro'yxatdan o'tish
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

