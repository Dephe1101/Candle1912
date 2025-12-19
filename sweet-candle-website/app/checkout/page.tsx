import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl">Thanh toán</h1>
            <p className="mt-2 text-muted-foreground">Hoàn tất đơn hàng của bạn</p>
          </div>
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
