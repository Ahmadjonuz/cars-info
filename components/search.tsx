"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"
import { featuredCars } from "@/lib/data"

export function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredCars =
    query === ""
      ? []
      : featuredCars.filter((car) => {
          const searchContent = `${car.brand} ${car.name} ${car.engine} ${car.power}`.toLowerCase()
          return searchContent.includes(query.toLowerCase())
        })

  const handleSelect = (carId: string) => {
    setOpen(false)
    router.push(`/cars/${carId}`)
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Avtomobillarni qidirish...</span>
        <span className="sr-only">Avtomobillarni qidirish</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle>Avtomobillarni qidirish</DialogTitle>
        <CommandInput placeholder="Avtomobillarni qidirish..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>Natija topilmadi.</CommandEmpty>
          <CommandGroup heading="Avtomobillar">
            {filteredCars.map((car) => (
              <CommandItem key={car.id} onSelect={() => handleSelect(car.id)} className="flex items-center gap-2 py-3">
                <div className="flex flex-col">
                  <span className="font-medium">
                    {car.brand} {car.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {car.engine} • {car.power} • {car.price}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

