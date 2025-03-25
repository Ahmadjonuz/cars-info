"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { CarCard } from "@/components/car-card"
import { brands } from "@/lib/data"
import { cars } from "@/lib/cars"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, X, Check, Car as CarIcon } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  const [powerRange, setPowerRange] = useState([0, 800])
  const [accelerationRange, setAccelerationRange] = useState([0, 10])
  const [results, setResults] = useState<Car[]>(cars)
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("price-asc")
  const { toast } = useToast()

  // Sort function
  const sortResults = (cars: Car[], sortType: string) => {
    return [...cars].sort((a, b) => {
      const aPrice = Number.parseInt(a.price.replace(/[^0-9]/g, ""))
      const bPrice = Number.parseInt(b.price.replace(/[^0-9]/g, ""))
      const aPower = Number.parseInt(a.power.replace(/[^0-9]/g, ""))
      const bPower = Number.parseInt(b.power.replace(/[^0-9]/g, ""))
      const aAccel = Number.parseFloat(a.acceleration.replace(/[^0-9.]/g, ""))
      const bAccel = Number.parseFloat(b.acceleration.replace(/[^0-9.]/g, ""))

      switch (sortType) {
        case "price-asc":
          return aPrice - bPrice
        case "price-desc":
          return bPrice - aPrice
        case "power-desc":
          return bPower - aPower
        case "acceleration-asc":
          return aAccel - bAccel
        default:
          return 0
      }
    })
  }

  useEffect(() => {
    try {
      const filtered = cars.filter((car) => {
        // Text search
        const searchContent = `${car.brand} ${car.name} ${car.engine} ${car.description}`.toLowerCase()
        const matchesQuery = query === "" || searchContent.includes(query.toLowerCase())

        // Brand filter
        const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand

        // Price filter
        const carPrice = Number.parseInt(car.price.replace(/[^0-9]/g, ""))
        const matchesPrice = carPrice >= priceRange[0] && carPrice <= priceRange[1]

        // Power filter
        const carPower = Number.parseInt(car.power.replace(/[^0-9]/g, ""))
        const matchesPower = carPower >= powerRange[0] && carPower <= powerRange[1]

        // Acceleration filter - updated to handle "0-100 km/h in X.X sec" format
        const accelerationMatch = car.acceleration.match(/in (\d+\.?\d*) sec/)
        const carAcceleration = accelerationMatch ? Number.parseFloat(accelerationMatch[1]) : 0
        const matchesAcceleration = carAcceleration >= accelerationRange[0] && carAcceleration <= accelerationRange[1]

        return matchesQuery && matchesBrand && matchesPrice && matchesPower && matchesAcceleration
      })

      // Apply sorting
      const sortedResults = sortResults(filtered, sortBy)
      setResults(sortedResults)
    } catch (error) {
      console.error("Error filtering/sorting results:", error)
      toast({
        title: "Xatolik yuz berdi",
        description: "Ma'lumotlarni qayta ishlashda xatolik yuz berdi",
        variant: "destructive",
      })
    }
  }, [query, selectedBrand, priceRange, powerRange, accelerationRange, sortBy])

  const resetFilters = () => {
    setSelectedBrand("all")
    setPriceRange([0, 200000])
    setPowerRange([0, 800])
    setAccelerationRange([0, 10])
    setQuery("")
    setSortBy("price-asc")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Avtomobil qidirish</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keng avtomobillar katalogidan o'zingizga mos avtomobilni toping
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6">
              {/* Search Bar */}
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="BMW M5, Mercedes-Benz yoki Toyota..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtrlar
                </Button>
                <Button onClick={resetFilters} variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {/* Brand Filter */}
                  <div className="space-y-2">
                    <Label>Brend</Label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="Brend tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Barcha brendlar</SelectItem>
                        {brands.map((brand) => (
                          <SelectItem key={brand.slug} value={brand.name}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>Narx oralig'i ($)</Label>
                    <div className="pt-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={200000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Power Range */}
                  <div className="space-y-2">
                    <Label>Quvvat (ot kuchi)</Label>
                    <div className="pt-2">
                      <Slider
                        value={powerRange}
                        onValueChange={setPowerRange}
                        max={800}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>{powerRange[0]} ot kuchi</span>
                        <span>{powerRange[1]} ot kuchi</span>
                      </div>
                    </div>
                  </div>

                  {/* Acceleration Range */}
                  <div className="space-y-2">
                    <Label>Tezlanish (0-100 km/s)</Label>
                    <div className="pt-2">
                      <Slider
                        value={accelerationRange}
                        onValueChange={setAccelerationRange}
                        min={0}
                        max={10}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>{accelerationRange[0].toFixed(1)} s</span>
                        <span>{accelerationRange[1].toFixed(1)} s</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {results.length} ta natija topildi
            </h2>
            {results.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Saralash:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Saralash turi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Narx: arzondan qimmatga</SelectItem>
                    <SelectItem value="price-desc">Narx: qimmatdan arzonga</SelectItem>
                    <SelectItem value="power-desc">Quvvat: yuqoridan pastga</SelectItem>
                    <SelectItem value="acceleration-asc">Tezlanish: tezdan sekinga</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {/* Results Grid */}
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <Card className="p-12">
              <div className="flex flex-col items-center justify-center text-center">
                <CarIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">Avtomobillar topilmadi</h3>
                <p className="text-muted-foreground mb-4">
                  Ushbu parametrlar bo'yicha hech qanday avtomobil topilmadi
                </p>
                <Button onClick={resetFilters} variant="outline">
                  Filtrlarni tozalash
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}