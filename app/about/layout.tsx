import { Metadata } from "next"

export const metadata: Metadata = {
  title: "CarInfo - Premium avtomobil brendlari haqida",
  description: "Dunyoning eng nufuzli avtomobil brendlari: BMW, Mercedes-Benz, Audi, Toyota va boshqa premium avtomobillar haqida batafsil ma'lumotlar",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 