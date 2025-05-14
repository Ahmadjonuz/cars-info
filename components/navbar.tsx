"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Heart, Menu, User } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import { Search } from "@/components/search"
import { User as SupabaseUser } from "@supabase/supabase-js"
import { useSupabase } from "@/components/providers/supabase-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { supabase, user } = useSupabase()

  useEffect(() => {
    const getFavoritesCount = async () => {
      if (user) {
        try {
          const { count, error: favError } = await supabase
            .from('favorites')
            .select('*', { count: 'exact' })
            .eq('user_id', user.id)
          
          if (favError) throw favError
          setFavoritesCount(count || 0)
        } catch (error) {
          console.error("Yoqtirilganlarni sanashda xatolik:", error)
          setFavoritesCount(0)
        }
      } else {
        setFavoritesCount(0)
      }
    }

    getFavoritesCount()
  }, [user, supabase])

  const handleSignOut = async () => {
    try {
      setLoading(true)
      setFavoritesCount(0)
      
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      await fetch('/api/auth/logout', {
        method: 'POST',
      })

      toast({
        title: "Muvaffaqiyatli",
        description: "Tizimdan muvaffaqiyatli chiqdingiz.",
      })
      
      router.push("/auth/login")
      router.refresh()
    } catch (error: any) {
      console.error("Tizimdan chiqishda xatolik:", error)
      toast({
        title: "Xato",
        description: "Tizimdan chiqishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const routes = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/brands/bmw", label: "BMW" },
    { href: "/brands/audi", label: "Audi" },
    { href: "/brands/toyota", label: "Toyota" },
    { href: "/brands/mercedes", label: "Mercedes" },
    { href: "/compare", label: "Taqqoslash" },
    { href: "/search", label: "Kengaytirilgan qidiruv" },
  ]

  const footerRoutes = [
    { href: "/about", label: "Biz haqimizda" },
    { href: "/contact", label: "Bog'lanish" },
    { href: "/privacy", label: "Maxfiylik siyosati" },
    { href: "/terms", label: "Foydalanish shartlari" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menyuni ochish</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left">Navigatsiya</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                {user && (
                  <Link
                    href="/favorites"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === "/favorites" ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    Sevimlilar
                  </Link>
                )}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                  <span className="text-sm font-medium">Mavzu</span>
                  <ModeToggle />
                </div>
                <div className="border-t border-border mt-4 pt-4">
                  {footerRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary block py-2",
                        pathname === route.href ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">CarInfo</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Qo'shimcha
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {footerRoutes.map((route) => (
                <DropdownMenuItem key={route.href} asChild>
                  <Link href={route.href}>{route.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          {!loading && user ? (
            <>
              <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/favorites">
                  <Heart className="h-5 w-5" />
                  {favoritesCount > 0 && (
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                    >
                      {favoritesCount}
                    </Badge>
                  )}
                  <span className="sr-only">Sevimlilar</span>
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="/placeholder-user.jpg" alt="Foydalanuvchi" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mening hisobim</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/favorites">Sevimlilar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Sozlamalar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>Chiqish</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Kirish</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Ro'yxatdan o'tish</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

