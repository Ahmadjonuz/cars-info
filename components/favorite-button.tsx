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

  // Function to format car ID consistently
  const formatCarId = (id: string) => id.replace(/[^a-zA-Z0-9]/g, '')

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          console.log("User not found, setting isFavorite to false")
          setIsFavorite(false)
          return
        }

        console.log("Checking favorite status for car:", carId, "and user:", user.id)

        // Format car ID consistently
        const formattedCarId = formatCarId(carId)

        if (!formattedCarId) {
          console.error("Invalid car ID provided")
          return
        }

        const { data, error } = await supabase
          .from('favorites')
          .select('id')
          .eq('user_id', user.id)
          .eq('car_id', formattedCarId)
          .maybeSingle()

        if (error) {
          console.error("Error checking favorite status:", error)
          return
        }

        console.log("Favorite status check result:", data)
        setIsFavorite(!!data)
      } catch (error) {
        console.error("Error in checkFavoriteStatus:", error instanceof Error ? error.message : error)
        setIsFavorite(false)
      }
    }

    checkFavoriteStatus()
  }, [carId, supabase])

  const toggleFavorite = async () => {
    try {
      setIsLoading(true)
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Error getting user:", userError)
        throw userError
      }

      if (!user) {
        toast({
          title: "Avtorizatsiya zarur",
          description: "Sevimlilar ro'yxatiga qo'shish uchun tizimga kiring.",
          variant: "destructive",
        })
        return
      }

      console.log("Toggling favorite for car:", carId, "and user:", user.id)

      // Format car ID consistently
      const formattedCarId = formatCarId(carId)

      if (!formattedCarId) {
        throw new Error("Invalid car ID provided")
      }

      if (isFavorite) {
        console.log("Removing from favorites...")
        const { error: deleteError, data: deleteData } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('car_id', formattedCarId)
          .select()

        if (deleteError) {
          console.error("Delete error:", deleteError)
          throw deleteError
        }

        console.log("Successfully removed from favorites:", deleteData)
        setIsFavorite(false)
        toast({
          title: "Sevimlilardan o'chirildi",
          description: "Bu avtomobil sevimlilar ro'yxatingizdan o'chirildi.",
        })
      } else {
        console.log("Adding to favorites with formatted ID:", formattedCarId)
        const { error: insertError, data: insertData } = await supabase
          .from('favorites')
          .insert([{ 
            user_id: user.id, 
            car_id: formattedCarId 
          }])
          .select()

        if (insertError) {
          console.error("Insert error details:", {
            message: insertError.message,
            details: insertError.details,
            hint: insertError.hint,
            code: insertError.code
          })
          throw insertError
        }

        console.log("Successfully added to favorites:", insertData)
        setIsFavorite(true)
        toast({
          title: "Sevimlilarga qo'shildi",
          description: "Bu avtomobil sevimlilar ro'yxatingizga qo'shildi.",
        })
      }
    } catch (error) {
      console.error("Error in toggleFavorite:", error instanceof Error ? error.message : error)
      toast({
        title: "Xatolik",
        description: "Sevimlilar ro'yxatini yangilashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleFavorite}
      disabled={isLoading}
      aria-label={isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
    >
      <Heart 
        className={`h-4 w-4 ${isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
      />
    </Button>
  )
}

