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

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [powerRange, setPowerRange] = useState([0, 700])
  const [results, setResults] = useState(featuredCars)

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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Search Cars</h1>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search by brand, model, or features..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger id="brand">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand.slug} value={brand.name}>
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>
            Price Range (${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()})
          </Label>
          <Slider
            defaultValue={[0, 200000]}
            max={200000}
            step={5000}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>

        <div className="space-y-4">
          <Label>
            Power Range ({powerRange[0]} hp - {powerRange[1]} hp)
          </Label>
          <Slider defaultValue={[0, 700]} max={700} step={50} value={powerRange} onValueChange={setPowerRange} />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Results ({results.length})</h2>
        {results.length === 0 && (
          <div className="text-center py-12 bg-muted rounded-lg">
            <p className="text-lg text-muted-foreground">No cars match your search criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setQuery("")
                setSelectedBrand("all")
                setPriceRange([0, 200000])
                setPowerRange([0, 700])
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}

