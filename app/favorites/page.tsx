"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { featuredCars } from "@/lib/data"
import { CarCard } from "@/components/car-card"
import { Button } from "@/components/ui/button"
import { useSupabase } from "@/components/providers/supabase-provider"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

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

export default function FavoritesPage() {
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState<Car[]>([])
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
        router.push('/auth/login')
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

      console.log("Favorite data from database:", favoriteData)
      
      // Get the full car details for each favorite
      const favoriteCars = favoriteData
        .map(favorite => {
          // Format the stored car_id back to match the original format
          const originalCarId = favorite.car_id.replace(/([a-zA-Z]+)(\d+)/, '$1-$2')
          console.log("Looking for car with original ID:", originalCarId)
          
          const car = featuredCars.find(car => {
            const formattedCarId = car.id.replace(/[^a-zA-Z0-9]/g, '')
            console.log("Comparing:", formattedCarId, "with:", favorite.car_id)
            return formattedCarId === favorite.car_id
          })
          
          if (car) {
            console.log("Found car:", car.id)
          } else {
            console.log("Car not found for ID:", favorite.car_id)
          }
          
          return car
        })
        .filter((car): car is Car => car !== undefined)

      console.log("Final favorite cars:", favoriteCars)
      setFavorites(favoriteCars)
    } catch (error) {
      console.error("Error in fetchFavorites:", error)
      toast({
        title: "Xatolik",
        description: "Sevimlilarni yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("Favorites page mounted")
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
      console.log("Favorites page unmounting")
      supabase.removeChannel(channel)
    }
  }, [supabase, router, toast])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sevimli avtomobillar</h1>
            <p className="text-muted-foreground">
              Sizning sevimli avtomobillaringiz
            </p>
          </div>
        </div>
        {favorites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                showFavoriteButton={true}
                isFavorited={true}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <div className="text-center">
              <h2 className="text-lg font-semibold">Sevimli avtomobillar yo'q</h2>
              <p className="text-muted-foreground">
                Siz hali hech qanday avtomobilni sevimlilar ro'yxatiga qo'shmagansiz
              </p>
            </div>
            <Button asChild>
              <Link href="/cars">Avtomobillarni ko'rish</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

