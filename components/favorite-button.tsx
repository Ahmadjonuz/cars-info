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
    const checkFavoriteStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        
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
        setIsFavorite(false)
      }
    }

    checkFavoriteStatus()
  }, [carId, supabase])

  const toggleFavorite = async () => {
    try {
      setIsLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        toast({
          title: "Avtorizatsiya zarur",
          description: "Sevimlilar ro'yxatiga qo'shish uchun tizimga kiring.",
          variant: "destructive",
        })
        return
      }

      if (isFavorite) {
        const { error: deleteError } = await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('car_id', carId)

        if (deleteError) throw deleteError

        setIsFavorite(false)
        toast({
          title: "Sevimlilardan o'chirildi",
          description: "Bu avtomobil sevimlilar ro'yxatingizdan o'chirildi.",
        })
      } else {
        const { error: insertError } = await supabase
          .from('favorites')
          .insert([{ user_id: user.id, car_id: carId }])

        if (insertError) throw insertError

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

