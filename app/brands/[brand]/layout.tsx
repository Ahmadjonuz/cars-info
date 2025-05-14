import { brands } from "@/lib/data"
import { Suspense } from "react"

export function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.slug,
  }))
}

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
} 