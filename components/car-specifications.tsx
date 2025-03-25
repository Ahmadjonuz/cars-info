"use client"

import { carSpecs } from "@/lib/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gauge, Ruler, Fuel } from "lucide-react"

interface CarSpecificationsProps {
  carId: string
}

type CarSpec = {
  performance: Record<string, string>
  dimensions: Record<string, string>
  fuelEconomy: Record<string, string>
}

export function CarSpecifications({ carId }: CarSpecificationsProps) {
  const specs = carSpecs[carId as keyof typeof carSpecs] as CarSpec

  if (!specs) {
    return null
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Texnik xususiyatlar</h2>
      </div>
      
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-8">
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <Gauge className="h-4 w-4" />
            Ishlash
          </TabsTrigger>
          <TabsTrigger value="dimensions" className="flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            O'lchamlar
          </TabsTrigger>
          <TabsTrigger value="fuelEconomy" className="flex items-center gap-2">
            <Fuel className="h-4 w-4" />
            Yoqilg'i sarfi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs.performance).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 p-4 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-lg font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dimensions">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs.dimensions).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 p-4 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-lg font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fuelEconomy">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.fuelEconomy && Object.entries(specs.fuelEconomy).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1 p-4 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-lg font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 