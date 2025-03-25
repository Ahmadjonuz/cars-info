import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { brands } from "@/lib/data"
import FeaturedCars from "@/components/featured-cars"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Discover Premium Car Brands</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore detailed information about the world's most prestigious automotive brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link href={`/brands/${brand.slug}`} key={brand.slug}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain p-4" />
                </div>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl font-bold">{brand.name}</h2>
                  <p className="text-muted-foreground mt-2">{brand.shortDescription}</p>
                  <Button className="mt-4" variant="outline">
                    Explore {brand.name}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Cars</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our handpicked selection of exceptional vehicles
          </p>
        </div>

        <FeaturedCars />
      </section>

      <section className="mb-12">
        <div className="bg-muted rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Compare Your Favorite Cars</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comparison tool helps you make informed decisions by comparing specifications, features, and
                performance metrics.
              </p>
              <Button asChild size="lg">
                <Link href="/compare">Start Comparing</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80">
              <Image src="/images/comparison.jpg" alt="Car Comparison" fill className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

