"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSupabase } from "@/components/providers/supabase-provider"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const { supabase } = useSupabase()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      setLoading(true)
      console.log("Fetching user...")
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError) {
        console.error("Error getting user:", userError.message)
        throw userError
      }

      if (!user) {
        console.log("No user found, redirecting to login")
        router.push('/auth/login')
        return
      }

      console.log("User found:", user.id)
      setEmail(user.email || "")

      // Get profile data
      console.log("Fetching profile for user:", user.id)
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)

      if (error) {
        console.error("Error fetching profile:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        throw error
      }

      console.log("Profile data:", data)

      if (data && data.length > 0) {
        const profile = data[0]
        setFullName(profile.full_name || "")
        setPhone(profile.phone || "")
      } else {
        // Create a new profile if it doesn't exist
        console.log("No profile found, creating new profile for user:", user.id)
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            full_name: "",
            phone: "",
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          })
          .select()
          .single()

        if (insertError) {
          console.error("Error creating profile:", {
            message: insertError.message,
            details: insertError.details,
            hint: insertError.hint,
            code: insertError.code
          })
          throw insertError
        }

        console.log("New profile created:", newProfile)
      }
    } catch (error: any) {
      console.error("Error in getProfile:", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        details: error?.details,
        hint: error?.hint,
        code: error?.code
      })
      toast({
        title: "Error",
        description: "Failed to load profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile() {
    try {
      setLoading(true)
      console.log("Getting current user...")
      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (userError) {
        console.error("Error getting user:", userError.message)
        throw userError
      }

      if (!user) {
        console.log("No user found, redirecting to login")
        router.push('/auth/login')
        return
      }

      console.log("Updating profile for user:", user.id)
      console.log("Profile data to update:", {
        full_name: fullName,
        phone: phone,
        updated_at: new Date().toISOString()
      })

      // First check if profile exists
      const { data: existingProfile, error: checkError } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single()

      if (checkError) {
        console.error("Error checking profile:", {
          message: checkError.message,
          details: checkError.details,
          hint: checkError.hint,
          code: checkError.code
        })
        throw checkError
      }

      if (!existingProfile) {
        console.log("Profile does not exist, creating new profile")
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            full_name: fullName,
            phone: phone,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString()
          })
          .select()
          .single()

        if (insertError) {
          console.error("Error creating profile:", {
            message: insertError.message,
            details: insertError.details,
            hint: insertError.hint,
            code: insertError.code
          })
          throw insertError
        }

        console.log("New profile created:", newProfile)
      } else {
        console.log("Updating existing profile")
        const { data, error } = await supabase
          .from('profiles')
          .update({
            full_name: fullName,
            phone: phone,
            updated_at: new Date().toISOString(),
          })
          .eq('id', user.id)
          .select()
          .single()

        if (error) {
          console.error("Error updating profile:", {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          })
          throw error
        }

        console.log("Profile updated successfully:", data)
      }

      toast({
        title: "Success",
        description: "Profile updated successfully!",
      })
    } catch (error: any) {
      console.error("Error in updateProfile:", {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        details: error?.details,
        hint: error?.hint,
        code: error?.code
      })
      toast({
        title: "Error",
        description: error?.message || "Failed to update profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/login')
    } catch (error) {
      console.error("Error signing out:", error)
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      })
    }
  }

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
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault()
            updateProfile()
          }}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Profile"}
              </Button>
            </div>
          </form>
          <Separator className="my-6" />
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Actions</h3>
            <Button
              variant="destructive"
              onClick={signOut}
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 