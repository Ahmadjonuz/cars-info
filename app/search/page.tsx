"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CarCard } from "@/components/car-card"
import { featuredCars, brands } from "@/lib/data"
import { useToast } from "@/components/ui/use-toast"

interface Car {
  id: string
  name: string
  brand: string
  image: string
  price: string
  engine: string
  power: string
  acceleration: string
  mpg: string
  description: string
  features: string[]
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [powerRange, setPowerRange] = useState([0, 700])
  const [results, setResults] = useState<Car[]>([])
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const filtered = featuredCars.filter((car) => {
      // Text search
      const searchContent = `${car.brand} ${car.name} ${car.engine} ${car.description}`.toLowerCase()
      const matchesQuery = query === "" || searchContent.includes(query.toLowerCase())

      // Brand filter
      const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand

      // Price filter (extract numeric value from price string)
      const carPrice = Number.parseInt(car.price.replace(/[^0-9]/g, ""))
      const matchesPrice = carPrice >= priceRange[0] && carPrice <= priceRange[1]

      // Power filter (extract numeric value from power string)
      const carPower = Number.parseInt(car.power.replace(/[^0-9]/g, ""))
      const matchesPower = carPower >= powerRange[0] && carPower <= powerRange[1]

      return matchesQuery && matchesBrand && matchesPrice && matchesPower
    })

    setResults(filtered)
  }, [query, selectedBrand, priceRange, powerRange])

  const handleSearch = () => {
    setLoading(true)
    // Implement search logic here
    setLoading(false)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Avtomobil qidirish</h1>
          <p className="text-muted-foreground">
            Avtomobillarni nomi yoki brendi bo'yicha qidiring
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="BMW M5, Mercedes-Benz yoki Toyota..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-xl"
          />
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? "Qidirilmoqda..." : "Qidirish"}
          </Button>
        </div>
        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : query ? (
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Avtomobillar topilmadi</h2>
              <p className="text-muted-foreground">
                Ushbu so'rov bo'yicha hech qanday avtomobil topilmadi
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

