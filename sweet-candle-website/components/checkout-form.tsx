"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Banknote } from "lucide-react"

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("cod")

  const cartItems = [
    {
      id: 1,
      name: "Lavender Dreams",
      price: 299000,
      quantity: 2,
    },
    {
      id: 2,
      name: "Sweet Vanilla",
      price: 279000,
      quantity: 1,
    },
    {
      id: 3,
      name: "Rose Garden",
      price: 319000,
      quantity: 1,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 30000
  const total = subtotal + shipping

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
      {/* Checkout Form */}
      <div className="space-y-6">
        {/* Customer Information */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Thông tin khách hàng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Họ</Label>
                <Input id="firstName" placeholder="Nguyễn" className="rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Tên</Label>
                <Input id="lastName" placeholder="Văn A" className="rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" className="rounded-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại</Label>
              <Input id="phone" placeholder="0912345678" className="rounded-full" />
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Địa chỉ giao hàng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Địa chỉ</Label>
              <Input id="address" placeholder="Số nhà, tên đường" className="rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">Thành phố</Label>
                <Input id="city" placeholder="Hồ Chí Minh" className="rounded-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">Quận/Huyện</Label>
                <Input id="district" placeholder="Quận 1" className="rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Ghi chú đơn hàng (không bắt buộc)</Label>
              <Textarea
                id="notes"
                placeholder="Ghi chú thêm về đơn hàng"
                className="min-h-[100px] resize-none rounded-3xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Phương thức thanh toán</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div className="flex items-center space-x-3 rounded-2xl border p-4 transition-colors hover:bg-secondary/30">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex flex-1 cursor-pointer items-center gap-3">
                  <Banknote className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Thanh toán khi nhận hàng (COD)</div>
                    <div className="text-sm text-muted-foreground">Thanh toán bằng tiền mặt khi nhận hàng</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-2xl border p-4 transition-colors hover:bg-secondary/30">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank" className="flex flex-1 cursor-pointer items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Chuyển khoản ngân hàng</div>
                    <div className="text-sm text-muted-foreground">Chuyển khoản qua ATM hoặc Internet Banking</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <div className="lg:sticky lg:top-20 lg:h-fit">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Đơn hàng của bạn</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Order Items */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toLocaleString()}đ</span>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{subtotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span>{shipping.toLocaleString()}đ</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between border-t pt-4">
              <span className="font-serif text-xl">Tổng cộng</span>
              <span className="font-serif text-2xl text-primary">{total.toLocaleString()}đ</span>
            </div>

            {/* Place Order Button */}
            <Button size="lg" className="w-full rounded-full">
              Đặt hàng
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Bằng cách đặt hàng, bạn đồng ý với các điều khoản và điều kiện của chúng tôi
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
