"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Linen Shirt", price: 2490000, quantity: 1, image: "/beige-linen-shirt.jpg" },
    { id: 2, name: "Tailored Blazer", price: 4990000, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 100000
  const total = subtotal + shipping

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " VND"
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-4 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Shopping Cart</h1>
        </div>
      </section>

      <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display hover:bg-accent transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-card border border-border">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-24 h-24 object-cover" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                      <p className="text-primary font-semibold">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-muted"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 hover:bg-muted text-destructive">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-6 sticky top-4">
                <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                </div>
                <div className="flex justify-between font-display text-lg text-foreground mb-6">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
                <button className="w-full py-4 bg-primary text-primary-foreground font-display hover:bg-accent transition-colors duration-300 mb-3">
                  Proceed to Checkout
                </button>
                <Link
                  href="/products"
                  className="block text-center py-3 border border-border text-foreground font-display hover:bg-muted transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ChatBot />
    </main>
  )
}
