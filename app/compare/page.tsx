"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { featuredCars } from "@/lib/data"

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

export default function ComparePage() {
  const [car1, setCar1] = useState<Car | null>(null)
  const [car2, setCar2] = useState<Car | null>(null)

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Avtomobillarni taqqoslash</h1>
          <p className="text-muted-foreground">
            Ikki avtomobilni tanlang va ularni taqqoslang
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Select onValueChange={(value) => setCar1(featuredCars.find(car => car.id === value) || null)}>
              <SelectTrigger>
                <SelectValue placeholder="Birinchi avtomobilni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {featuredCars.map((car) => (
                  <SelectItem key={car.id} value={car.id}>
                    {car.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select onValueChange={(value) => setCar2(featuredCars.find(car => car.id === value) || null)}>
              <SelectTrigger>
                <SelectValue placeholder="Ikkinchi avtomobilni tanlang" />
              </SelectTrigger>
              <SelectContent>
                {featuredCars.map((car) => (
                  <SelectItem key={car.id} value={car.id}>
                    {car.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {car1 && car2 && (
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{car1.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4">
                  <Image
                    src={car1.image}
                    alt={car1.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Narx</div>
                    <div className="font-medium">{car1.price} so'm</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Dvigatel</div>
                    <div className="font-medium">{car1.engine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Quvvat</div>
                    <div className="font-medium">{car1.power} ot kuchi</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Tezlanish</div>
                    <div className="font-medium">{car1.acceleration} sek</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Yoqilg'i sarfi</div>
                    <div className="font-medium">{car1.mpg} l/100km</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{car2.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4">
                  <Image
                    src={car2.image}
                    alt={car2.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Narx</div>
                    <div className="font-medium">{car2.price} so'm</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Dvigatel</div>
                    <div className="font-medium">{car2.engine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Quvvat</div>
                    <div className="font-medium">{car2.power} ot kuchi</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Tezlanish</div>
                    <div className="font-medium">{car2.acceleration} sek</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Yoqilg'i sarfi</div>
                    <div className="font-medium">{car2.mpg} l/100km</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

