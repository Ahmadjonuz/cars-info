import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maxfiylik siyosati | CarInfo",
  description: "CarInfo platformasining maxfiylik siyosati - Foydalanuvchilar ma'lumotlarini himoya qilish va qayta ishlash qoidalari",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 