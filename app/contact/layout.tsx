import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bog'lanish | CarInfo",
  description: "CarInfo bilan bog'lanish - Savollaringiz va takliflaringiz uchun biz bilan bog'laning",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 