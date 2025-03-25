"use client"

import { FavoriteButton } from "@/components/favorite-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface CarDetailsClientProps {
  car: {
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
  }
}

export function CarDetailsClient({ car }: CarDetailsClientProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold">{car.name}</h1>
          <p className="text-2xl text-muted-foreground">{car.price}</p>
        </div>
        <FavoriteButton carId={car.id} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Engine</div>
            <div className="font-medium">{car.engine}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Power</div>
            <div className="font-medium">{car.power}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Acceleration</div>
            <div className="font-medium">{car.acceleration}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground">Fuel Economy</div>
            <div className="font-medium">{car.mpg}</div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground">{car.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="flex flex-wrap gap-2">
          {car.features.map((feature, index) => (
            <Badge key={index} variant="secondary">
              {feature}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex justify-center">
        <Button size="lg" className="w-full md:w-auto">
          Schedule Test Drive
        </Button>
      </div>
    </div>
  )
} 