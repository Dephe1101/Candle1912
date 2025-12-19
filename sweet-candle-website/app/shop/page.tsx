"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ShopFilters } from "@/components/shop-filters"
import { motion } from "framer-motion"
import { FloatingParticles } from "@/components/floating-particles"

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header with animations */}
        <section className="relative overflow-hidden border-b bg-secondary/30 py-12">
          <FloatingParticles count={10} />
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="mb-4 inline-block text-4xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                🕯️
              </motion.div>
              <h1 className="font-serif text-4xl md:text-5xl">San pham</h1>
              <p className="mt-2 text-muted-foreground">Kham pha bo suu tap nen thom handmade</p>
            </motion.div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              {/* Filters Sidebar */}
              <motion.aside
                className="lg:sticky lg:top-20 lg:h-fit"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ShopFilters />
              </motion.aside>

              {/* Products Grid */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <ProductGrid />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
