"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("popular")
  const [favorites, setFavorites] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: "Lavender Dreams",
      price: 299000,
      image: "/pink-pastel-lavender-scented-candle-in-glass-jar.jpg",
      badge: "Best Seller",
      scent: "Hoa Lavender",
      size: "100g",
    },
    {
      id: 2,
      name: "Sweet Vanilla",
      price: 279000,
      image: "/cream-vanilla-scented-candle-with-soft-pink-aesthe.jpg",
      badge: "New",
      scent: "Vanilla ngot ngao",
      size: "100g",
    },
    {
      id: 3,
      name: "Rose Garden",
      price: 319000,
      image: "/pink-rose-scented-candle-pastel-aesthetic.jpg",
      badge: "Sweet",
      scent: "Hoa hong",
      size: "100g",
    },
    {
      id: 4,
      name: "Citrus Bliss",
      price: 289000,
      image: "/yellow-citrus-scented-candle-soft-pastel-aesthetic.jpg",
      badge: "Fresh",
      scent: "Cam chanh tuoi mat",
      size: "100g",
    },
    {
      id: 5,
      name: "Cherry Blossom",
      price: 309000,
      image: "/pink-cherry-blossom-candle-pastel-jar.jpg",
      badge: "Sweet",
      scent: "Hoa anh dao",
      size: "100g",
    },
    {
      id: 6,
      name: "Mint Breeze",
      price: 269000,
      image: "/mint-green-candle-fresh-pastel.jpg",
      badge: "Fresh",
      scent: "Bac ha mat lanh",
      size: "100g",
    },
    {
      id: 7,
      name: "Peach Dream",
      price: 295000,
      image: "/peach-pastel-candle-sweet-scent.jpg",
      badge: "New",
      scent: "Dao ngot",
      size: "100g",
    },
    {
      id: 8,
      name: "Jasmine Night",
      price: 329000,
      image: "/jasmine-white-candle-elegant-pastel.jpg",
      badge: "Best Seller",
      scent: "Hoa nhai dem",
      size: "100g",
    },
    {
      id: 9,
      name: "Strawberry Kiss",
      price: 285000,
      image: "/strawberry-pink-candle-cute-pastel.jpg",
      badge: "Sweet",
      scent: "Dau tay ngot",
      size: "50g",
    },
    {
      id: 10,
      name: "Ocean Mist",
      price: 299000,
      image: "/ocean-blue-candle-fresh-pastel.jpg",
      badge: "Fresh",
      scent: "Huong bien",
      size: "100g",
    },
    {
      id: 11,
      name: "Honey Almond",
      price: 315000,
      image: "/honey-almond-candle-warm-cream.jpg",
      badge: "New",
      scent: "Mat ong hanh nhan",
      size: "100g",
    },
    {
      id: 12,
      name: "Lilac Whisper",
      price: 305000,
      image: "/lilac-purple-candle-soft-pastel.jpg",
      badge: "Best Seller",
      scent: "Hoa tu dinh huong",
      size: "100g",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  return (
    <div className="space-y-6">
      {/* Sort & Results */}
      <motion.div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm text-muted-foreground">Hien thi {products.length} san pham</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sap xep:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Pho bien nhat</SelectItem>
              <SelectItem value="newest">Moi nhat</SelectItem>
              <SelectItem value="price-asc">Gia: Thap den cao</SelectItem>
              <SelectItem value="price-desc">Gia: Cao den thap</SelectItem>
              <SelectItem value="name">Ten: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/product/${product.id}`}>
                <Card className="group overflow-hidden border-0 bg-card shadow-sm transition-all hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <motion.img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="aspect-square w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Badge with animation */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Badge className="absolute right-3 top-3 rounded-full">{product.badge}</Badge>
                      </motion.div>

                      {/* Favorite button */}
                      <motion.button
                        className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleFavorite(product.id, e)}
                      >
                        <Heart
                          className={`h-4 w-4 transition-colors ${
                            favorites.includes(product.id) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </motion.button>

                      {/* Hover overlay with candle glow effect */}
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      {/* Floating candle icon on hover */}
                      <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl opacity-0 group-hover:opacity-100"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <motion.span
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          🕯️
                        </motion.span>
                      </motion.div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.scent}</p>
                        <p className="text-xs text-muted-foreground">{product.size}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <motion.span className="font-serif text-lg text-primary" whileHover={{ scale: 1.05 }}>
                          {product.price.toLocaleString()}d
                        </motion.span>
                        <motion.div
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="rounded-full"
                            onClick={(e) => {
                              e.preventDefault()
                              // Add to cart logic
                            }}
                          >
                            Them vao gio
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
