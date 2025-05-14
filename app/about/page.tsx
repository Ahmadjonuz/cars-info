"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function AboutPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-b from-background to-background/80"
    >
      <div className="container max-w-5xl py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            CarInfo haqida
          </h1>
          <p className="text-xl text-muted-foreground">
            Dunyoning eng nufuzli avtomobil brendlari haqida batafsil ma'lumotlar platformasi
          </p>
        </motion.div>
        
        <motion.div variants={staggerContainer} className="grid gap-12 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/about.png"
                alt="Premium avtomobillar"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5c0-1.1.9-2 2-2h2"/><path d="M17 3h2c1.1 0 2 .9 2 2v2"/><path d="M21 17v2c0 1.1-.9 2-2 2h-2"/><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
                </span>
                Platformamiz haqida
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                CarInfo - dunyoning eng nufuzli avtomobil brendlari haqida batafsil ma'lumot beruvchi 
                platforma. BMW, Mercedes-Benz, Audi, Toyota kabi premium brendlar haqida eng so'nggi va 
                ishonchli ma'lumotlarni taqdim etamiz.
              </p>
            </section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </span>
                Bizning maqsadimiz
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Premium avtomobillar haqida qiziquvchilarga eng to'liq va professional ma'lumotlarni yetkazish. 
                Har bir avtomobil modeli haqida texnik xususiyatlar, dizayn, xavfsizlik va innovatsiyalar 
                bo'yicha batafsil ma'lumotlar taqdim etish.
              </p>
            </motion.section>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeInUp} 
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium ma'lumotlar</h3>
            <p className="text-muted-foreground">Har bir premium avtomobil modeli haqida professional darajadagi ma'lumotlar</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">So'nggi yangiliklar</h3>
            <p className="text-muted-foreground">Premium avtomobil brendlarining eng so'nggi yangiliklari va yangi modellari</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ekspert tahlillar</h3>
            <p className="text-muted-foreground">Avtomobil ekspertlarining professional tahlil va sharhlari</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 