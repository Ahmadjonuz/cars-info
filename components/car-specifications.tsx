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

interface CarSpecificationsProps {
  carId: string
}

type CarSpec = {
  performance: Record<string, string>
  dimensions: Record<string, string>
  fuelEconomy?: Record<string, string>
  features?: {
    Exterior: string[]
    Interior: string[]
    Safety: string[]
  }
}

export function CarSpecifications({ carId }: CarSpecificationsProps) {
  const specs = carSpecs[carId as keyof typeof carSpecs] as CarSpec

  if (!specs) {
    return null
  }

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Specifications</CardTitle>
        <CardDescription>
          Detailed technical specifications and measurements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance" className="w-full">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
            <TabsTrigger value="fuelEconomy">Fuel Economy</TabsTrigger>
          </TabsList>
          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specs.performance).map(([key, value]) => (
                <div key={key} className="flex justify-between p-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dimensions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specs.dimensions).map(([key, value]) => (
                <div key={key} className="flex justify-between p-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="fuelEconomy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.fuelEconomy && Object.entries(specs.fuelEconomy).map(([key, value]) => (
                <div key={key} className="flex justify-between p-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 