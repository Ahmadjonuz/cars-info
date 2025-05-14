"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-b from-background to-background/80"
    >
      <div className="container max-w-4xl py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Biz bilan bog'lanish
          </h1>
          <p className="text-xl text-muted-foreground">
            Savollaringiz va takliflaringiz uchun biz bilan bog'laning
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            variants={fadeInUp}
            className="space-y-8 bg-card p-8 rounded-2xl shadow-lg"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Bog'lanish ma'lumotlari</h2>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@carinfo.uz</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+998 93 978 73 75</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Manzil</p>
                    <p className="text-muted-foreground">Toshkent shahri, Chilonzor tumani</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Ish vaqti</h2>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center justify-between">
                  <span>Dushanba - Juma:</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Shanba:</span>
                  <span>10:00 - 15:00</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Yakshanba:</span>
                  <span>Dam olish kuni</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-card p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Xabar qoldirish</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Xabaringiz yuborildi!</h3>
                <p className="text-muted-foreground">Tez orada siz bilan bog'lanamiz.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ismingiz
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ismingizni kiriting"
                    className="bg-background"
                    required 
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Email manzilingizni kiriting"
                    className="bg-background"
                    required 
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Xabar
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Xabaringizni yozing"
                    className="min-h-[120px] bg-background"
                    required
                  />
                </motion.div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Yuborilmoqda...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Yuborish
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 