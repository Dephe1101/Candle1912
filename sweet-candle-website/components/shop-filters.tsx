"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 500000])

  const scentCategories = [
    { id: "sweet", label: "Ngọt ngào 🍓", count: 12 },
    { id: "relaxing", label: "Thư giãn 🌙", count: 8 },
    { id: "fresh", label: "Tươi mát 🍋", count: 10 },
    { id: "feminine", label: "Nữ tính 🌸", count: 15 },
    { id: "herbal", label: "Thảo mộc 🌿", count: 6 },
  ]

  const sizes = [
    { id: "small", label: "Nhỏ (50g)", count: 8 },
    { id: "medium", label: "Vừa (100g)", count: 18 },
    { id: "large", label: "Lớn (200g)", count: 12 },
  ]

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Lọc sản phẩm</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Scent Categories */}
        <div>
          <h3 className="mb-3 font-medium">Mùi hương</h3>
          <div className="space-y-2">
            {scentCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id} className="flex-1 cursor-pointer text-sm font-normal leading-relaxed">
                  {category.label}
                  <span className="ml-1 text-muted-foreground">({category.count})</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="mb-3 font-medium">Giá</h3>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={500000} step={10000} className="w-full" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{priceRange[0].toLocaleString()}đ</span>
              <span>{priceRange[1].toLocaleString()}đ</span>
            </div>
          </div>
        </div>

        {/* Size */}
        <div>
          <h3 className="mb-3 font-medium">Dung tích</h3>
          <div className="space-y-2">
            {sizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-2">
                <Checkbox id={size.id} />
                <Label htmlFor={size.id} className="flex-1 cursor-pointer text-sm font-normal leading-relaxed">
                  {size.label}
                  <span className="ml-1 text-muted-foreground">({size.count})</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <Button variant="outline" className="w-full rounded-full bg-transparent">
          Đặt lại bộ lọc
        </Button>
      </CardContent>
    </Card>
  )
}
