import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <ProductDetail productId={params.id} />
          <div className="mt-16">
            <RelatedProducts />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
