"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"
import { Heart, Filter } from "lucide-react"

export default function ProductsPage() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const categories = ["All", "Shirts", "Blazers", "Trousers", "Dresses", "Accessories"]

  const products = [
    { id: 1, name: "Linen Shirt", price: "2,490,000 VND", category: "Shirts", image: "/elegant-beige-linen-shirt.jpg" },
    {
      id: 2,
      name: "Tailored Blazer",
      price: "4,990,000 VND",
      category: "Blazers",
      image: "/brown-tailored-blazer.jpg",
    },
    {
      id: 3,
      name: "Wide Leg Trousers",
      price: "3,290,000 VND",
      category: "Trousers",
      image: "/beige-wide-leg-trousers.jpg",
    },
    { id: 4, name: "Silk Dress", price: "5,490,000 VND", category: "Dresses", image: "/elegant-silk-dress-brown.jpg" },
    { id: 5, name: "Cotton T-Shirt", price: "1,290,000 VND", category: "Shirts", image: "/beige-cotton-tshirt.jpg" },
    { id: 6, name: "Wool Coat", price: "7,990,000 VND", category: "Blazers", image: "/brown-wool-coat-elegant.jpg" },
    {
      id: 7,
      name: "Linen Trousers",
      price: "2,990,000 VND",
      category: "Trousers",
      image: "/beige-linen-trousers.jpg",
    },
    { id: 8, name: "Evening Gown", price: "8,990,000 VND", category: "Dresses", image: "/elegant-evening-gown-brown.jpg" },
    { id: 9, name: "Leather Belt", price: "890,000 VND", category: "Accessories", image: "/brown-leather-belt.png" },
    {
      id: 10,
      name: "Silk Scarf",
      price: "1,490,000 VND",
      category: "Accessories",
      image: "/beige-silk-scarf.jpg",
    },
    {
      id: 11,
      name: "Cashmere Sweater",
      price: "3,990,000 VND",
      category: "Shirts",
      image: "/beige-cashmere-sweater.jpg",
    },
    { id: 12, name: "Linen Jacket", price: "4,490,000 VND", category: "Blazers", image: "/beige-linen-jacket.jpg" },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">Our Collection</h1>
          <p className="text-muted-foreground">Explore our complete range of elegant fashion pieces</p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 py-12 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="lg:w-48 flex-shrink-0">
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <Filter size={20} />
            <h2 className="font-display text-lg">Filters</h2>
          </div>
          <div className="hidden lg:block">
            <h2 className="font-display text-lg text-foreground mb-4">Categories</h2>
          </div>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-body transition-colors duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                  <h3 className="font-display text-lg text-foreground">{product.name}</h3>
                  <p className="font-body text-lg text-primary font-semibold">{product.price}</p>
                  <button className="w-full py-3 bg-secondary text-secondary-foreground font-display hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </main>
  )
}
