'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { SupabaseClient, User } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/types/supabase'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
  user: User | null
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [supabase] = useState(() => createClientComponentClient())
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        
        if (session?.user) {
          setUser(session.user)
        }
      } catch (error) {
        console.error('Session initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    try {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          setUser(session.user)
        } else {
          setUser(null)
        }

        if (event === 'SIGNED_IN') {
          // Handle session update without page reload
          const currentPath = window.location.pathname
          if (currentPath.startsWith('/auth/')) {
            window.location.href = '/'
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
          // Redirect to login page if on a protected route
          const currentPath = window.location.pathname
          const protectedRoutes = ['/profile', '/favorites', '/compare']
          if (protectedRoutes.some(route => currentPath.startsWith(route))) {
            window.location.href = '/auth/login'
          }
        }
      })

      return () => {
        subscription.unsubscribe()
      }
    } catch (error) {
      console.error('Auth state change error:', error)
    }
  }, [supabase])

  if (loading) {
    return null // or a loading spinner
  }

  return (
    <Context.Provider value={{ supabase, user }}>
      {children}
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }
  return context
} 