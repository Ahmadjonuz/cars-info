import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeInitializer } from "@/components/theme-initializer"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { ToastContainer } from "@/components/toast-container"
import { ToastProvider } from "@/hooks/use-toast"
import SupabaseProvider from "@/components/providers/supabase-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CarInfo - Avtomobillar haqida ma'lumot",
  description: "Eng so'nggi avtomobillar haqida ma'lumot oling va ularni solishtiring",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div id="root" suppressHydrationWarning>
          <SupabaseProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <ToastProvider>
                <ThemeInitializer />
                <Navbar />
                {children}
                <Footer />
                <ToastContainer />
              </ToastProvider>
            </ThemeProvider>
          </SupabaseProvider>
        </div>
      </body>
    </html>
  )
}



import './globals.css'