import { featuredCars, carSpecs, carImages } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { CarCard } from "@/components/car-card"
import { CarSpecifications } from "@/components/car-specifications"
import { CarDetailsClient } from "@/components/car-details-client"
import { SimilarCars } from "@/components/similar-cars"

type BrandKey = keyof typeof carImages
type ModelKey<T extends BrandKey> = keyof typeof carImages[T]['models']

export function generateStaticParams() {
  return featuredCars.map((car) => ({
    id: car.id,
  }))
}

export default function CarPage({ params }: { params: { id: string } }) {
  const car = featuredCars.find((c) => c.id === params.id)

  if (!car) {
    notFound()
  }

  // Get the brand slug for image lookup
  const brandSlug = car.brand.toLowerCase().replace(/\s+/g, '') as BrandKey
  
  // Get the car image from the carImages object
  const carImage = carImages[brandSlug]?.models[car.id as ModelKey<typeof brandSlug>] || car.image

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src={carImage} alt={car.name} fill className="object-cover" priority />
        </div>
        <CarDetailsClient car={car} />
      </div>

      <CarSpecifications carId={car.id} />

      <SimilarCars 
        currentCarId={car.id}
        currentCarBrand={car.brand}
        allCars={featuredCars}
      />
    </div>
  )
}

