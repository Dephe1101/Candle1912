import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartItems } from "@/components/cart-items"

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl">Giỏ hàng của bạn</h1>
            <p className="mt-2 text-muted-foreground">Xem lại sản phẩm trước khi thanh toán</p>
          </div>
          <CartItems />
        </div>
      </main>
      <Footer />
    </>
  )
}
