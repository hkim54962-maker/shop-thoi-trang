"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"
import { Heart } from "lucide-react"

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const featuredProducts = [
    {
      id: 1,
      name: "Linen Shirt",
      price: "2,490,000 VND",
      image: "/elegant-beige-linen-shirt-fashion.jpg",
      category: "Shirts",
    },
    {
      id: 2,
      name: "Tailored Blazer",
      price: "4,990,000 VND",
      image: "/brown-tailored-blazer-elegant.jpg",
      category: "Blazers",
    },
    {
      id: 3,
      name: "Wide Leg Trousers",
      price: "3,290,000 VND",
      image: "/beige-wide-leg-trousers-fashion.jpg",
      category: "Trousers",
    },
    {
      id: 4,
      name: "Silk Dress",
      price: "5,490,000 VND",
      image: "/elegant-silk-dress-brown-beige.jpg",
      category: "Dresses",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 text-balance">Elegance Redefined</h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Discover our curated collection of timeless fashion pieces crafted with sophistication and style
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-display text-lg hover:bg-accent transition-colors duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">Featured Collection</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Handpicked pieces that embody elegance and contemporary style
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden bg-muted mb-4 aspect-[3/4]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur hover:bg-background transition-colors"
                >
                  <Heart
                    size={20}
                    className={favorites.includes(product.id) ? "fill-accent text-accent" : "text-foreground"}
                  />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</p>
                <h3 className="font-display text-xl text-foreground">{product.name}</h3>
                <p className="font-body text-lg text-primary font-semibold">{product.price}</p>
                <button className="w-full py-3 bg-secondary text-secondary-foreground font-display hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mt-4">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-display hover:bg-accent transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
}
