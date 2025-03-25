import { cars, carSpecs, carImages } from "@/lib/data"
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
  return cars.map((car) => ({
    id: car.id,
  }))
}

export default function CarPage({ params }: { params: { id: string } }) {
  const car = cars.find((c) => c.id === params.id)

  if (!car) {
    notFound()
  }

  const brandSlug = car.brand.toLowerCase().replace(/\s+/g, '') as BrandKey
  const carImage = carImages[brandSlug]?.models[car.id as ModelKey<typeof brandSlug>] || car.image

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image 
          src={carImage} 
          alt={car.name} 
          fill 
          className="object-cover brightness-75"
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{car.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{car.description}</p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto flex items-center gap-6 overflow-x-auto py-4">
          <a href="#umumiy-malumot" className="text-sm font-medium hover:text-primary transition-colors">
            Umumiy ma'lumot
          </a>
          <a href="#xususiyatlar" className="text-sm font-medium hover:text-primary transition-colors">
            Xususiyatlar
          </a>
          <a href="#jihozlar" className="text-sm font-medium hover:text-primary transition-colors">
            Jihozlar
          </a>
          <a href="#oxshash-modellar" className="text-sm font-medium hover:text-primary transition-colors">
            O'xshash modellar
          </a>
        </nav>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section id="umumiy-malumot" className="mb-16">
          <CarDetailsClient car={car} />
        </section>

        {/* Specifications Section */}
        <section id="xususiyatlar" className="mb-16">
          <CarSpecifications carId={car.id} />
        </section>

        {/* Similar Cars Section */}
        <section id="oxshash-modellar" className="mb-16">
          <SimilarCars 
            currentCarId={car.id}
            currentCarBrand={car.brand}
            allCars={cars}
          />
        </section>
      </main>
    </div>
  )
}

