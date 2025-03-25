"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { featuredCars } from "@/lib/data"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { useSupabase } from "@/components/providers/supabase-provider"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { supabase } = useSupabase()
  const router = useRouter()
  const { toast } = useToast()

  const fetchFavorites = async () => {
    try {
      console.log("Fetching favorites...")
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Error getting user:", userError)
        throw userError
      }

      if (!user) {
        console.log("No user found, redirecting to login")
        router.push('/login')
        return
      }

      console.log("User found:", user.id)
      // Get user's favorite car IDs
      const { data: favoriteData, error: favoriteError } = await supabase
        .from('favorites')
        .select('car_id')
        .eq('user_id', user.id)

      if (favoriteError) {
        console.error("Error fetching favorites:", favoriteError)
        throw favoriteError
      }

      console.log("Favorite data:", favoriteData)
      // Get the full car details for each favorite
      const favoriteCars = favoriteData
        .map(favorite => {
          const car = featuredCars.find(car => car.id === favorite.car_id)
          console.log("Found car for favorite:", favorite.car_id, car)
          return car
        })
        .filter(car => car !== undefined)

      console.log("Final favorite cars:", favoriteCars)
      setFavorites(favoriteCars)
    } catch (error) {
      console.error("Error in fetchFavorites:", error)
      toast({
        title: "Error",
        description: "Failed to load favorites. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("Setting up favorites page...")
    fetchFavorites()

    // Subscribe to changes in the favorites table
    const channel = supabase
      .channel('favorites_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'favorites'
        },
        (payload) => {
          console.log("Favorites table changed:", payload)
          fetchFavorites()
        }
      )
      .subscribe()

    return () => {
      console.log("Cleaning up favorites page...")
      supabase.removeChannel(channel)
    }
  }, [supabase, router, toast])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Favorite Cars</h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((car) => (
            <CarCard 
              key={car.id} 
              car={car} 
              isFavorited={true} 
              showFavoriteButton={true} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold mb-4">No favorites yet</h2>
          <p className="text-muted-foreground mb-8">
            You haven't added any cars to your favorites yet. Browse our collection and add some!
          </p>
          <Button asChild>
            <Link href="/">Browse Cars</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

