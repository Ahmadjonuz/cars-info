"use client"

import { useState } from "react"
import { compareData } from "@/lib/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState<string[]>(["bmw-m5", "audi-rs7"])

  const handleCarSelect = (position: number, carId: string) => {
    const newSelectedCars = [...selectedCars]
    newSelectedCars[position] = carId
    setSelectedCars(newSelectedCars)
  }

  const addCarToCompare = () => {
    if (selectedCars.length < 4) {
      setSelectedCars([...selectedCars, compareData[0].id])
    }
  }

  const removeCarFromCompare = (index: number) => {
    const newSelectedCars = selectedCars.filter((_, i) => i !== index)
    setSelectedCars(newSelectedCars)
  }

  const selectedCarsData = selectedCars.map((id) => compareData.find((car) => car.id === id))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Car Comparison Tool</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Compare specifications and features of different cars to find the perfect match for your needs
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select Cars to Compare</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedCars.map((selectedCar, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Select value={selectedCar} onValueChange={(value) => handleCarSelect(index, value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a car" />
                  </SelectTrigger>
                  <SelectContent>
                    {compareData.map((car) => (
                      <SelectItem key={car.id} value={car.id}>
                        {car.brand} {car.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedCars.length > 2 && (
                  <Button variant="outline" size="sm" onClick={() => removeCarFromCompare(index)}>
                    Remove
                  </Button>
                )}
              </div>
            ))}
            {selectedCars.length < 4 && (
              <Button onClick={addCarToCompare} className="h-10">
                Add Car
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 border-b"></th>
              {selectedCarsData.map((car, index) => (
                <th key={index} className="p-4 border-b">
                  {car && (
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative h-32 w-full">
                        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-contain" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold">{car.brand}</div>
                        <div className="text-lg">{car.name}</div>
                      </div>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium p-4 border-b">Price</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Engine</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.engine}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Power</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.power}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Torque</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.torque}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">0-60 mph</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.acceleration}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Top Speed</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.topSpeed}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Fuel Economy</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.mpg}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Transmission</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.transmission}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Drivetrain</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.drivetrain}
                </td>
              ))}
            </tr>
            <tr>
              <td className="font-medium p-4 border-b">Weight</td>
              {selectedCarsData.map((car, index) => (
                <td key={index} className="text-center p-4 border-b">
                  {car?.weight}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

