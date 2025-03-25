"use client"

import { useState } from "react"
import { cars } from "@/lib/cars"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const brands = ["all", "BMW", "Audi", "Toyota", "Mercedes"]

export default function CarsPage() {
  const [query, setQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")

  const filteredCars = cars.filter((car) => {
    const matchesQuery = query === "" || 
      car.name.toLowerCase().includes(query.toLowerCase()) ||
      car.brand.toLowerCase().includes(query.toLowerCase())
    
    const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand

    return matchesQuery && matchesBrand
  })

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Barcha avtomobillar</h1>
        <p className="text-muted-foreground">
          Mavjud barcha avtomobillar ro'yxati
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Avtomobil qidirish..."
            className="pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Brend tanlang" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand === "all" ? "Barcha brendlar" : brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      {filteredCars.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-lg font-semibold">Avtomobillar topilmadi</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Qidiruv parametrlarini o'zgartiring yoki filtrlarni tozalang
          </p>
        </div>
      )}
    </div>
  )
} 