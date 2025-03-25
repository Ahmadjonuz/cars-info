"use client"

import { FavoriteButton } from "@/components/favorite-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { GaugeCircle, Zap, Timer, Fuel, Share2, Calendar, DollarSign } from "lucide-react"
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
    <div className="space-y-8">
      {/* Asosiy ma'lumotlar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">{car.brand} {car.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span className="text-xl font-semibold">{car.price}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" aria-label="Ulashish">
            <Share2 className="h-4 w-4" />
          </Button>
          <FavoriteButton carId={car.id} />
          <Button className="w-full md:w-auto">Test-drayv uchun yozilish</Button>
        </div>
      </div>

      {/* Asosiy xususiyatlar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6">
            <GaugeCircle className="h-8 w-8 mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Dvigatel</p>
            <p className="text-lg font-semibold mt-1">{car.engine}</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6">
            <Zap className="h-8 w-8 mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Quvvat</p>
            <p className="text-lg font-semibold mt-1">{car.power}</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6">
            <Timer className="h-8 w-8 mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Tezlanish</p>
            <p className="text-lg font-semibold mt-1">{car.acceleration}</p>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6">
            <Fuel className="h-8 w-8 mb-2 text-primary" />
            <p className="text-sm text-muted-foreground">Yoqilg'i sarfi</p>
            <p className="text-lg font-semibold mt-1">{car.mpg}</p>
          </CardContent>
        </Card>
      </div>

      {/* Jihozlar bo'limi */}
      <div id="jihozlar">
        <h3 className="text-2xl font-semibold mb-4">Xususiyatlar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {car.features.map((feature, index) => (
            <Card key={index} className="bg-muted/50">
              <CardContent className="p-4">
                <p className="text-sm">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Galereya */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Rasmlar</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={car.image}
              alt={`${car.name} - Old ko'rinishi`}
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={car.image}
              alt={`${car.name} - Yon ko'rinishi`}
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={car.image}
              alt={`${car.name} - Ichki ko'rinishi`}
              fill
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Chaqiruv harakati */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Test-drayv uchun yoziling</h3>
              <p className="text-primary-foreground/90">Bu avtomobilni yaqindan ko'rish va sinab ko'rish uchun test-drayv band qiling</p>
            </div>
            <Button variant="secondary" size="lg">
              Band qilish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 