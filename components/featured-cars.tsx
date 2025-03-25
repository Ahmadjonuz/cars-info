"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredCars } from "@/lib/data"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"

const CARS_PER_PAGE = 9

export default function FeaturedCars() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  const filteredCars = activeTab === "all"
    ? featuredCars
    : featuredCars.filter((car) => {
        switch (activeTab) {
          case "bmw":
            return car.brand === "BMW"
          case "audi":
            return car.brand === "Audi"
          case "toyota":
            return car.brand === "Toyota"
          case "mercedes":
            return car.brand === "Mercedes-Benz"
          default:
            return true
        }
      })

  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARS_PER_PAGE
  const endIndex = startIndex + CARS_PER_PAGE
  const currentCars = filteredCars.slice(startIndex, endIndex)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentPage(1)
  }

  return (
    <div>
      <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="bmw">BMW</TabsTrigger>
          <TabsTrigger value="audi">Audi</TabsTrigger>
          <TabsTrigger value="toyota">Toyota</TabsTrigger>
          <TabsTrigger value="mercedes">Mercedes</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="bmw">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="audi">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="toyota">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="mercedes">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

