"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FavoriteButton } from "@/components/favorite-button"
import { carImages } from "@/lib/data"

type BrandKey = keyof typeof carImages
type ModelKey<T extends BrandKey> = keyof typeof carImages[T]['models']

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
  image?: string
}

interface CarCardProps {
  car: Car
  showFavoriteButton?: boolean
  isFavorited?: boolean
}

export function CarCard({ car, showFavoriteButton = true, isFavorited = false }: CarCardProps) {
  // Get the brand slug for image lookup
  const brandSlug = car.brand.toLowerCase().replace(/\s+/g, '') as BrandKey
  
  // Get the car image from the carImages object
  const carImage = carImages[brandSlug]?.models[car.id as ModelKey<typeof brandSlug>] || car.image

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={carImage}
          alt={car.name}
          fill
          className="object-cover"
        />
        {showFavoriteButton && (
          <div className="absolute top-2 right-2">
            <FavoriteButton 
              carId={car.id} 
              initialFavorited={isFavorited}
            />
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-sm text-muted-foreground">{car.brand}</p>
          </div>
          <div className="text-lg font-bold">{car.price}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="text-muted-foreground mr-2">Engine:</span>
            <span>{car.engine}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-muted-foreground mr-2">Power:</span>
            <span>{car.power}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-muted-foreground mr-2">0-60:</span>
            <span>{car.acceleration}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-muted-foreground mr-2">MPG:</span>
            <span>{car.mpg}</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={`/cars/${car.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

