"use client"

import { FavoriteButton } from "@/components/favorite-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

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
    image: string
  }
}

export function CarDetailsClient({ car }: CarDetailsClientProps) {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{car.name}</CardTitle>
              <CardDescription>{car.brand}</CardDescription>
            </div>
            <FavoriteButton carId={car.id} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="rounded-lg object-cover"
              />
            </AspectRatio>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Dvigatel</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{car.engine}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Quvvat</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{car.power} ot kuchi</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Tezlanish</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{car.acceleration} sek</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">Yoqilg'i sarfi</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-2xl font-bold">{car.mpg} l/100km</p>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Ta'rif</h2>
                <p className="text-muted-foreground">{car.description}</p>
              </div>
              <div>
                <h2 className="mb-2 text-lg font-semibold">Xususiyatlar</h2>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Test-drayv uchun yozilish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 