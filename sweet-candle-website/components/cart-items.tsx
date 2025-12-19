"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export function CartItems() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lavender Dreams",
      price: 299000,
      image: "/pink-pastel-lavender-scented-candle-in-glass-jar.jpg",
      scent: "Hoa Lavender",
      size: "100g",
      quantity: 2,
    },
    {
      id: 2,
      name: "Sweet Vanilla",
      price: 279000,
      image: "/cream-vanilla-scented-candle-with-soft-pink-aesthe.jpg",
      scent: "Vanilla ngọt ngào",
      size: "100g",
      quantity: 1,
    },
    {
      id: 3,
      name: "Rose Garden",
      price: 319000,
      image: "/pink-rose-scented-candle-pastel-aesthetic.jpg",
      scent: "Hoa hồng",
      size: "100g",
      quantity: 1,
    },
  ])

  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 30000
  const discount = 0
  const total = subtotal + shipping - discount

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/50">
          <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        </div>
        <h2 className="mb-2 font-serif text-2xl">Giỏ hàng trống</h2>
        <p className="mb-6 text-muted-foreground">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
        <Button size="lg" className="rounded-full" asChild>
          <Link href="/shop">Mua sắm ngay</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.scent} • {item.size}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-full border bg-background p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-serif text-lg text-primary">{item.price.toLocaleString()}đ</span>
                  </div>
                </div>

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0 text-destructive hover:text-destructive"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:sticky lg:top-20 lg:h-fit">
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-6 p-6">
            <h2 className="font-serif text-2xl">Tóm tắt đơn hàng</h2>

            {/* Promo Code */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Mã giảm giá</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Nhập mã"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="rounded-full"
                />
                <Button variant="outline" className="rounded-full bg-transparent">
                  Áp dụng
                </Button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{subtotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span>{shipping.toLocaleString()}đ</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Giảm giá</span>
                  <span className="text-green-600">-{discount.toLocaleString()}đ</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between border-t pt-4">
              <span className="font-serif text-xl">Tổng cộng</span>
              <span className="font-serif text-2xl text-primary">{total.toLocaleString()}đ</span>
            </div>

            {/* Checkout Button */}
            <Button size="lg" className="w-full rounded-full" asChild>
              <Link href="/checkout">Thanh toán</Link>
            </Button>

            <Button size="lg" variant="outline" className="w-full rounded-full bg-transparent" asChild>
              <Link href="/shop">Tiếp tục mua sắm</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
