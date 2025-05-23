import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CarInfo</h3>
            <p className="text-muted-foreground">
              Dunyoning eng nufuzli avtomobil brendlari haqida batafsil ma'lumotni o'rganing.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Brendlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/brands/bmw" className="text-muted-foreground hover:text-primary">
                  BMW
                </Link>
              </li>
              <li>
                <Link href="/brands/audi" className="text-muted-foreground hover:text-primary">
                  Audi
                </Link>
              </li>
              <li>
                <Link href="/brands/toyota" className="text-muted-foreground hover:text-primary">
                  Toyota
                </Link>
              </li>
              <li>
                <Link href="/brands/mercedes" className="text-muted-foreground hover:text-primary">
                  Mercedes-Benz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Bog'lanish
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Maxfiylik siyosati
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Foydalanish shartlari
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Bizni kuzating</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} CarInfo. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

