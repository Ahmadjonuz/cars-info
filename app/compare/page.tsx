"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GaugeCircle, Zap, Timer, Fuel, DollarSign, Car as CarIcon, Check, X } from "lucide-react"
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

  const getNumericValue = (str: string) => {
    const num = parseFloat(str.replace(/[^0-9.]/g, ''))
    return isNaN(num) ? 0 : num
  }

  const compareValues = (value1: string, value2: string, lowerIsBetter = false) => {
    const num1 = getNumericValue(value1)
    const num2 = getNumericValue(value2)
    if (num1 === num2) return 'equal'
    return lowerIsBetter ? (num1 < num2 ? 'better' : 'worse') : (num1 > num2 ? 'better' : 'worse')
  }

  const getComparisonClass = (comparison: string) => {
    switch (comparison) {
      case 'better': return 'text-green-500 font-bold'
      case 'worse': return 'text-red-500'
      default: return ''
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Avtomobillarni taqqoslash</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ikki avtomobilni tanlang va ularning texnik xususiyatlarini batafsil taqqoslang
          </p>
        </div>

        {/* Car Selection */}
        <Card className="border-dashed">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block">Birinchi avtomobil</label>
                <Select onValueChange={(value) => setCar1(featuredCars.find(car => car.id === value) || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Avtomobilni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {featuredCars.map((car) => (
                      <SelectItem key={car.id} value={car.id}>
                        {car.brand} {car.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Ikkinchi avtomobil</label>
                <Select onValueChange={(value) => setCar2(featuredCars.find(car => car.id === value) || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Avtomobilni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {featuredCars.map((car) => (
                      <SelectItem key={car.id} value={car.id}>
                        {car.brand} {car.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Section */}
        {car1 && car2 && (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Umumiy ma'lumot</TabsTrigger>
              <TabsTrigger value="specs">Texnik xususiyatlar</TabsTrigger>
              <TabsTrigger value="features">Jihozlar</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2">
                {[car1, car2].map((car, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{car.brand} {car.name}</CardTitle>
                      <CardDescription>{car.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="text-xl font-semibold">{car.price}</span>
                      </div>
                      <p className="text-muted-foreground">{car.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Specs Tab */}
            <TabsContent value="specs">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">Xususiyat</div>
                    <div className="font-medium">{car1.brand} {car1.name}</div>
                    <div className="font-medium">{car2.brand} {car2.name}</div>

                    {/* Engine */}
                    <div className="text-muted-foreground">Dvigatel</div>
                    <div className={getComparisonClass(compareValues(car1.engine, car2.engine))}>
                      {car1.engine}
                    </div>
                    <div className={getComparisonClass(compareValues(car2.engine, car1.engine))}>
                      {car2.engine}
                    </div>

                    {/* Power */}
                    <div className="text-muted-foreground">Quvvat</div>
                    <div className={getComparisonClass(compareValues(car1.power, car2.power))}>
                      {car1.power}
                    </div>
                    <div className={getComparisonClass(compareValues(car2.power, car1.power))}>
                      {car2.power}
                    </div>

                    {/* Acceleration */}
                    <div className="text-muted-foreground">Tezlanish</div>
                    <div className={getComparisonClass(compareValues(car1.acceleration, car2.acceleration, true))}>
                      {car1.acceleration}
                    </div>
                    <div className={getComparisonClass(compareValues(car2.acceleration, car1.acceleration, true))}>
                      {car2.acceleration}
                    </div>

                    {/* Fuel Economy */}
                    <div className="text-muted-foreground">Yoqilg'i sarfi</div>
                    <div className={getComparisonClass(compareValues(car1.mpg, car2.mpg, true))}>
                      {car1.mpg}
                    </div>
                    <div className={getComparisonClass(compareValues(car2.mpg, car1.mpg, true))}>
                      {car2.mpg}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">Jihozlar</div>
                    <div className="font-medium">{car1.brand} {car1.name}</div>
                    <div className="font-medium">{car2.brand} {car2.name}</div>

                    {Array.from(new Set([...car1.features, ...car2.features])).map((feature, index) => (
                      <React.Fragment key={index}>
                        <div className="text-muted-foreground">{feature}</div>
                        <div>
                          {car1.features.includes(feature) ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          {car2.features.includes(feature) ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}

