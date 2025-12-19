"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Heart, Share2, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

export function ProductDetail({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock product data
  const product = {
    id: productId,
    name: "Lavender Dreams",
    price: 299000,
    originalPrice: 349000,
    scent: "Hoa Lavender",
    size: "100g",
    burnTime: "25-30 gio",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 128,
    inStock: true,
    images: [
      "/pink-pastel-lavender-scented-candle-in-glass-jar.jpg",
      "/lavender-candle-top-view-pastel.jpg",
      "/lavender-candle-lit-glowing-pastel.jpg",
      "/lavender-candle-lifestyle-cozy-room.jpg",
    ],
    description:
      "Nen thom Lavender Dreams mang den huong thom nhe nhang cua hoa oai huong, giup thu gian va giam cang thang sau mot ngay dai. Lam tu sap dau nanh tu nhien va tinh dau lavender nguyen chat.",
    features: [
      "100% sap dau nanh tu nhien",
      "Tinh dau lavender nguyen chat",
      "Bac nen cotton khong chi",
      "Thoi gian chay: 25-30 gio",
      "Handmade voi tinh yeu",
    ],
    howToUse: [
      "Cat bac nen con 5mm truoc khi thap",
      "Thap nen trong 2-3 gio moi lan de sap tan deu",
      "Khong de nen chay qua 4 gio lien tuc",
      "Dat nen tren be mat chiu nhiet, tranh gio",
      "Khong de tre em va vat nuoi tiep can",
    ],
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const imageVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  }

  return (
    <motion.div
      className="grid gap-8 lg:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image with animation */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-secondary/30"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="aspect-square w-full object-cover"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {product.badge && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <Badge className="absolute left-4 top-4 rounded-full">{product.badge}</Badge>
            </motion.div>
          )}

          {/* Candle glow effect overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-radial from-yellow-200/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          className="grid grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {product.images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`overflow-hidden rounded-xl border-2 transition-all ${
                selectedImage === index ? "border-primary" : "border-transparent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                className="aspect-square w-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Product Info */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Title & Price */}
        <div>
          <motion.h1
            className="font-serif text-3xl text-balance md:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {product.name}
          </motion.h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.scent}</p>

          {/* Rating with animated stars */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                >
                  <Star
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} danh gia)
            </span>
          </div>

          {/* Price with glow effect */}
          <motion.div
            className="mt-4 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="font-serif text-3xl text-primary"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,182,193,0)",
                  "0 0 15px rgba(255,182,193,0.5)",
                  "0 0 5px rgba(255,182,193,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {product.price.toLocaleString()}d
            </motion.span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {product.originalPrice.toLocaleString()}d
              </span>
            )}
          </motion.div>
        </div>

        {/* Product Details */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="border-0 bg-secondary/30">
            <CardContent className="grid gap-3 p-6 text-sm">
              {[
                { label: "Dung tich:", value: product.size },
                { label: "Thoi gian chay:", value: product.burnTime },
                { label: "Tinh trang:", value: product.inStock ? "Con hang" : "Het hang", isStock: true },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex justify-between"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className={`font-medium ${item.isStock && product.inStock ? "text-green-600" : ""}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quantity */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <label className="mb-2 block text-sm font-medium">So luong</label>
          <div className="flex w-fit items-center gap-3 rounded-full border bg-background p-1">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.span
              className="w-12 text-center font-medium"
              key={quantity}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {quantity}
            </motion.span>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="w-full rounded-full">
              Them vao gio hang
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <motion.div animate={isFavorite ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : ""}`} />
              </motion.div>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Share2 className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button size="lg" variant="secondary" className="w-full rounded-full">
            Mua ngay
          </Button>
        </motion.div>

        {/* Product Details Tabs */}
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3 rounded-full">
              <TabsTrigger value="description" className="rounded-full">
                Mo ta
              </TabsTrigger>
              <TabsTrigger value="features" className="rounded-full">
                Dac diem
              </TabsTrigger>
              <TabsTrigger value="usage" className="rounded-full">
                Huong dan
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <motion.p
                className="leading-relaxed text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {product.description}
              </motion.p>
            </TabsContent>
            <TabsContent value="features" className="mt-6">
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.span
                      className="mt-1 text-primary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="usage" className="mt-6">
              <ol className="space-y-2">
                {product.howToUse.map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                    >
                      {index + 1}
                    </motion.span>
                    <span className="text-muted-foreground">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
