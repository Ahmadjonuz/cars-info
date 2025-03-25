"use client"

import { CarCard } from "@/components/car-card"

interface Car {
  id: string
  name: string
  brand: string
  price: string
  engine: string
  power: string
  acceleration: string
  mpg: string
  description: string
  features: string[]
  image: string
}

interface SimilarCarsProps {
  currentCarId: string
  currentCarBrand: string
  allCars: Car[]
}

export function SimilarCars({ currentCarId, currentCarBrand, allCars }: SimilarCarsProps) {
  // Get similar cars (same brand, excluding current car)
  const similarCars = allCars
    .filter(car => 
      car.brand === currentCarBrand && 
      car.id !== currentCarId
    )
    .slice(0, 3) // Show up to 3 similar cars

  if (similarCars.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Similar Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarCars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car}
            showFavoriteButton={true}
          />
        ))}
      </div>
    </div>
  )
} 