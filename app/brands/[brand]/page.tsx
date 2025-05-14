"use client"

import { brands, featuredCars } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { FadeUpContainer, StaggerContainer, FadeInItem, ScaleItem, SlideInFromSide, GradientText } from "@/components/animations"
import { use } from "react"

export default function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const resolvedParams = use(params)
  const brand = brands.find((b) => b.slug === resolvedParams.brand)

  if (!brand) {
    notFound()
  }

  const brandCars = featuredCars.filter((car) => car.brand === brand.name)

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeUpContainer className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <SlideInFromSide direction="left" className="relative h-48 w-48 flex-shrink-0">
          <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
        </SlideInFromSide>
        <SlideInFromSide direction="right" className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            <GradientText>{brand.name}</GradientText>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">{brand.shortDescription}</p>
          <p className="mb-4">{brand.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-muted-foreground">Bosh qarorgohi:</span> {brand.headquarters}
            </div>
            <div>
              <span className="text-muted-foreground">Asos solingan:</span> {brand.founded}
            </div>
          </div>
          <ScaleItem>
            <Button asChild variant="outline">
              <Link href={brand.website} target="_blank" rel="noopener noreferrer">
                Rasmiy veb-saytga o'tish
              </Link>
            </Button>
          </ScaleItem>
        </SlideInFromSide>
      </FadeUpContainer>

      <FadeUpContainer delay={0.2}>
        <h2 className="text-3xl font-bold mb-8">
          <GradientText>{brand.name} modellari</GradientText>
        </h2>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCars.map((car) => (
            <FadeInItem key={car.id}>
              <ScaleItem>
                <Card className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
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
                        <span className="text-muted-foreground mr-2">Dvigatel:</span>
                        <span>{car.engine}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-2">Quvvat:</span>
                        <span>{car.power}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-2">0-100 km/s:</span>
                        <span>{car.acceleration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-2">Yoqilg'i sarfi:</span>
                        <span>{car.mpg}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/cars/${car.id}`}>Batafsil ma'lumot</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScaleItem>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </FadeUpContainer>
    </div>
  )
}

