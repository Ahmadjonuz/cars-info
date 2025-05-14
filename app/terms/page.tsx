"use client"

import { motion } from "framer-motion"
import { Shield, Book, Users, Bell, Lock, FileText, Phone } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const sections = [
  {
    icon: Shield,
    title: "1. Umumiy qoidalar",
    content: `CarInfo - premium avtomobil brendlari haqida ma'lumot beruvchi platforma hisoblanadi. 
    Platformadan foydalanishdan oldin ushbu shartlar bilan tanishib chiqishingizni so'raymiz.`
  },
  {
    icon: Book,
    title: "2. Ma'lumotlardan foydalanish",
    content: `Platformadagi barcha ma'lumotlar rasmiy manbalardan olingan bo'lib, faqat ma'lumot berish 
    maqsadida taqdim etiladi. Ma'lumotlarning to'liqligi va yangiligi uchun biz javobgar emasmiz.`,
    list: [
      "Ma'lumotlardan faqat shaxsiy maqsadlarda foydalanish mumkin",
      "Tijorat maqsadlarida foydalanish taqiqlanadi",
      "Ma'lumotlarni noto'g'ri talqin qilish va tarqatish man etiladi"
    ]
  },
  {
    icon: FileText,
    title: "3. Mualliflik huquqlari",
    content: `Platformadagi barcha kontentlar, shu jumladan rasmlar, videolar va texnik ma'lumotlar 
    tegishli avtomobil brendlarining mualliflik huquqi bilan himoyalangan. Ulardan foydalanish 
    faqat platformada ko'rsatilgan shartlar asosida amalga oshiriladi.`
  },
  {
    icon: Lock,
    title: "4. Maxfiylik siyosati",
    content: `Foydalanuvchilarning shaxsiy ma'lumotlari xalqaro standartlar asosida himoyalanadi. 
    Biz sizning ma'lumotlaringizni uchinchi shaxslarga bermaylik va faqat xizmat ko'rsatish 
    maqsadida foydalanamiz.`
  },
  {
    icon: Users,
    title: "5. Javobgarlik",
    content: `CarInfo platformasi ma'lumotlarning to'liqligi va aniqligi uchun javobgar emas. 
    Avtomobil xarid qilish bo'yicha qarorlar qabul qilishdan oldin rasmiy dilerlar bilan 
    maslahatlashishni tavsiya qilamiz.`
  },
  {
    icon: Bell,
    title: "6. Yangilanishlar",
    content: `Platformadagi ma'lumotlar muntazam yangilanib turadi. Yangi modellar va texnik 
    o'zgarishlar haqidagi ma'lumotlar imkon qadar tezroq qo'shib boriladi.`
  },
  {
    icon: Phone,
    title: "7. Bog'lanish",
    content: `Platformada keltirilgan ma'lumotlar bo'yicha savollar yoki aniqliklar kiritish 
    uchun biz bilan bog'lanish sahifasi orqali bog'lanishingiz mumkin.`
  }
]

export default function TermsPage() {
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
            Foydalanish shartlari
          </h1>
          <p className="text-xl text-muted-foreground">
            Premium avtomobil ma'lumotlaridan foydalanish shartlari
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-lg mt-1">
                  <section.icon className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {section.list.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
} 