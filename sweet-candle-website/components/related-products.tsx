"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 2,
      name: "Sweet Vanilla",
      price: 279000,
      image: "/cream-vanilla-scented-candle-with-soft-pink-aesthe.jpg",
      badge: "New",
      scent: "Vanilla ngọt ngào",
    },
    {
      id: 3,
      name: "Rose Garden",
      price: 319000,
      image: "/pink-rose-scented-candle-pastel-aesthetic.jpg",
      badge: "Sweet",
      scent: "Hoa hồng",
    },
    {
      id: 5,
      name: "Cherry Blossom",
      price: 309000,
      image: "/pink-cherry-blossom-candle-pastel-jar.jpg",
      badge: "Sweet",
      scent: "Hoa anh đào",
    },
    {
      id: 8,
      name: "Jasmine Night",
      price: 329000,
      image: "/jasmine-white-candle-elegant-pastel.jpg",
      badge: "Best Seller",
      scent: "Hoa nhài đêm",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl">Sản phẩm liên quan</h2>
        <p className="mt-2 text-muted-foreground">Bạn có thể thích những sản phẩm này</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="group overflow-hidden border-0 bg-card shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute right-3 top-3 rounded-full">{product.badge}</Badge>
                </div>
                <div className="space-y-3 p-4">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.scent}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-primary">{product.price.toLocaleString()}đ</span>
                    <Button
                      size="sm"
                      className="rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
