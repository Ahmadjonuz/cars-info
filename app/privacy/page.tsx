"use client"

import { motion } from "framer-motion"
import { 
  Lock, 
  Shield, 
  Eye, 
  Database, 
  RefreshCw, 
  UserCheck, 
  AlertTriangle,
  Cookie,
  Mail
} from "lucide-react"

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
    icon: Lock,
    title: "Ma'lumotlarni himoyalash",
    content: `Biz sizning shaxsiy ma'lumotlaringizni eng yuqori darajada himoya qilamiz. 
    Barcha ma'lumotlar xavfsiz serverlarda saqlanadi va shifrlash texnologiyalari yordamida 
    himoyalanadi.`
  },
  {
    icon: Shield,
    title: "Ma'lumotlardan foydalanish",
    content: `Sizning ma'lumotlaringizdan faqat xizmat ko'rsatish maqsadida foydalanamiz. 
    Uchinchi shaxslarga sizning ruxsatingizsiz hech qanday ma'lumot berilmaydi.`,
    list: [
      "Profil ma'lumotlari",
      "Avtomobillar haqidagi izohlar",
      "Sevimli avtomobillar ro'yxati"
    ]
  },
  {
    icon: Eye,
    title: "Shaffoflik",
    content: `Biz sizning ma'lumotlaringizdan qanday foydalanayotganimiz haqida to'liq 
    ma'lumot beramiz. Siz istalgan vaqtda o'z ma'lumotlaringizni ko'rish va o'zgartirish 
    huquqiga egasiz.`
  },
  {
    icon: Database,
    title: "Ma'lumotlarni saqlash",
    content: `Foydalanuvchi ma'lumotlari xavfsiz serverlarda saqlanadi. Ma'lumotlar 
    faqat zarur muddat davomida saqlanadi va keyin avtomatik ravishda o'chiriladi.`
  },
  {
    icon: Cookie,
    title: "Cookie-fayllardan foydalanish",
    content: `Saytimiz cookie-fayllardan foydalanadi. Ular sizga qulay interfeys va 
    personallashtirilgan kontent taqdim etish uchun ishlatiladi. Siz brauzeringiz 
    sozlamalarida cookie-fayllarni o'chirib qo'yishingiz mumkin.`
  },
  {
    icon: RefreshCw,
    title: "Ma'lumotlarni yangilash",
    content: `Siz istalgan vaqtda o'z shaxsiy ma'lumotlaringizni yangilash yoki 
    o'zgartirish huquqiga egasiz. Buning uchun profil sozlamalariga kirishingiz mumkin.`
  },
  {
    icon: UserCheck,
    title: "Foydalanuvchi huquqlari",
    content: `Siz quyidagi huquqlarga egasiz:`,
    list: [
      "Ma'lumotlaringizni ko'rish va nusxa olish",
      "Ma'lumotlaringizni o'zgartirish yoki o'chirish",
      "Ma'lumotlardan foydalanishni cheklash",
      "Ma'lumotlarni boshqa tizimga ko'chirish"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Xavfsizlik choralari",
    content: `Biz ma'lumotlar xavfsizligini ta'minlash uchun zamonaviy himoya tizimlaridan 
    foydalanamiz. Shubhali faoliyat aniqlansa, darhol tegishli choralar ko'riladi.`
  },
  {
    icon: Mail,
    title: "Bog'lanish",
    content: `Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, biz bilan bog'lanishingiz mumkin:`,
    list: [
      "Email: privacy@carinfo.uz",
      "Telefon: +998 90 123 45 67",
      "Bog'lanish formasi orqali"
    ]
  }
]

export default function PrivacyPage() {
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
            Maxfiylik siyosati
          </h1>
          <p className="text-xl text-muted-foreground">
            Sizning ma'lumotlaringiz xavfsizligi bizning ustuvor vazifamiz
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

        <motion.div
          variants={fadeInUp}
          className="mt-12 p-6 bg-primary/5 rounded-2xl text-center"
        >
          <p className="text-muted-foreground">
            Ushbu maxfiylik siyosati oxirgi marta 2025-yil boshida yangilangan
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 