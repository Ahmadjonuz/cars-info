"use client"

import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent } from "@/components/ui/card"
import { FavoriteButton } from "@/components/favorite-button"
import { carImages } from "@/lib/data"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { GaugeCircle, Zap, Timer, Fuel } from "lucide-react"

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
    <Card className="overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={carImage}
            alt={car.name}
            fill
            className="object-cover"
          />
        </AspectRatio>
        {showFavoriteButton && (
          <div className="absolute right-2 top-2">
            <FavoriteButton 
              carId={car.id} 
              initialFavorited={isFavorited}
            />
          </div>
        )}
      </div>
      <CardContent className="grid gap-2.5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{car.name}</h3>
          </div>
          <div className="text-sm text-muted-foreground">
            {car.price} so'm
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <GaugeCircle className="h-4 w-4" />
            <span>{car.engine}</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            <span>{car.power} ot kuchi</span>
          </div>
          <div className="flex items-center gap-1">
            <Timer className="h-4 w-4" />
            <span>{car.acceleration} sek</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.mpg} l/100km</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/cars/${car.id}`}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "outline",
              }),
              "w-full"
            )}
          >
            Batafsil
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}


