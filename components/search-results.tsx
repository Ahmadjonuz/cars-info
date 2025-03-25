"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { cars } from "@/lib/cars"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SearchResultsProps {
  onClose: () => void
}

export function SearchResults({ onClose }: SearchResultsProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(cars)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const handleSearch = async () => {
      if (!query.trim()) {
        setResults(cars)
        return
      }

      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const filtered = cars.filter(car => 
        car.name.toLowerCase().includes(query.toLowerCase()) ||
        car.brand.toLowerCase().includes(query.toLowerCase())
      )
      
      setResults(filtered)
      setIsLoading(false)
    }

    const timeoutId = setTimeout(handleSearch, 300)
    return () => clearTimeout(timeoutId)
  }, [query])

  const handleCarClick = async (carId: string) => {
    try {
      // Find the car in our data to verify it exists
      const car = cars.find(c => c.id === carId)
      if (!car) {
        console.error("Car not found:", carId)
        toast({
          title: "Error",
          description: "Car not found. Please try again.",
          variant: "destructive",
        })
        return
      }

      // Close the search modal first
      onClose()
      
      // Then navigate to the car details page
      router.push(`/cars/${carId}`)
    } catch (error) {
      console.error("Error navigating to car details:", error instanceof Error ? error.message : error)
      toast({
        title: "Error",
        description: "Failed to navigate to car details. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search cars..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : results.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((car) => (
              <div 
                key={car.id} 
                className="cursor-pointer"
                onClick={() => handleCarClick(car.id)}
              >
                <CarCard 
                  car={car} 
                  showFavoriteButton={false}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">No cars found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
} 