import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Foydalanish shartlari | Premium avtomobil ma'lumotlari",
  description: "Premium avtomobil brendlari haqidagi ma'lumotlardan foydalanish shartlari va qoidalari - CarInfo platformasi",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 