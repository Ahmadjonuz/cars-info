"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useSupabase } from "@/components/providers/supabase-provider"

interface FavoriteButtonProps {
  carId: string
  initialFavorited?: boolean
}

export function FavoriteButton({ carId, initialFavorited = false }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorited)
  const [isLoading, setIsLoading] = useState(false)
  const { supabase } = useSupabase()
  const { toast } = useToast()

  useEffect(() => {
    checkFavoriteStatus()
  }, [carId])

  async function checkFavoriteStatus() {
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Error getting user:", userError.message)
        return
      }

      if (!user) {
        setIsFavorite(false)
        return
      }

      const { data, error } = await supabase
        .from('favorites')
        .select('id')
        .eq('user_id', user.id)
        .eq('car_id', carId)
        .maybeSingle()

      if (error) {
        console.error("Error checking favorite status:", error.message)
        return
      }

      setIsFavorite(!!data)
    } catch (error) {
      console.error("Error in checkFavoriteStatus:", error instanceof Error ? error.message : error)
    }
  }

  async function toggleFavorite() {
    try {
      setIsLoading(true)
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Error getting user:", userError.message)
        throw userError
      }

      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to add favorites.",
          variant: "destructive",
        })
        return
      }

      if (isFavorite) {
        // Remove favorite
        const { error: deleteError } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('car_id', carId)

        if (deleteError) {
          console.error("Error removing favorite:", deleteError.message)
          throw deleteError
        }

        setIsFavorite(false)
        toast({
          title: "Removed from Favorites",
          description: "This car has been removed from your favorites.",
        })
      } else {
        // Add favorite
        const { error: insertError } = await supabase
          .from('favorites')
          .insert([
            {
              user_id: user.id,
              car_id: carId,
            }
          ])

        if (insertError) {
          console.error("Error adding favorite:", insertError.message)
          throw insertError
        }

        setIsFavorite(true)
        toast({
          title: "Added to Favorites",
          description: "This car has been added to your favorites.",
        })
      }
    } catch (error) {
      console.error("Error in toggleFavorite:", error instanceof Error ? error.message : error)
      toast({
        title: "Error",
        description: "Failed to update favorites. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`absolute top-2 right-2 z-10 rounded-full p-2 ${
        isFavorite ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-500'
      }`}
      onClick={toggleFavorite}
      disabled={isLoading}
    >
      <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
    </Button>
  )
}

