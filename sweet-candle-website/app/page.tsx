"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Sparkles, Heart, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { FloatingParticles } from "@/components/floating-particles"

export default function HomePage() {
  const bestsellers = [
    {
      id: 1,
      name: "Lavender Dreams",
      price: "299.000d",
      image: "/pink-pastel-lavender-scented-candle-in-glass-jar.jpg",
      badge: "Best Seller",
      scent: "Hoa Lavender",
    },
    {
      id: 2,
      name: "Sweet Vanilla",
      price: "279.000d",
      image: "/cream-vanilla-scented-candle-with-soft-pink-aesthe.jpg",
      badge: "New",
      scent: "Vanilla ngot ngao",
    },
    {
      id: 3,
      name: "Rose Garden",
      price: "319.000d",
      image: "/pink-rose-scented-candle-pastel-aesthetic.jpg",
      badge: "Sweet",
      scent: "Hoa hong",
    },
    {
      id: 4,
      name: "Citrus Bliss",
      price: "289.000d",
      image: "/yellow-citrus-scented-candle-soft-pastel-aesthetic.jpg",
      badge: "Fresh",
      scent: "Cam chanh tuoi mat",
    },
  ]

  const categories = [
    {
      name: "Ngot ngao",
      emoji: "🍓",
      description: "Huong thom ngot ngao de thuong",
      color: "bg-pink-50",
    },
    {
      name: "Thu gian",
      emoji: "🌙",
      description: "Xoa diu cang thang",
      color: "bg-purple-50",
    },
    {
      name: "Tuoi mat",
      emoji: "🍋",
      description: "Sang khoai tinh than",
      color: "bg-yellow-50",
    },
    {
      name: "Nu tinh",
      emoji: "🌸",
      description: "Hoa thom quyen ru",
      color: "bg-pink-100",
    },
  ]

  const reasons = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "100% Handmade",
      description: "Lam thu cong voi tinh yeu",
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      title: "Tinh dau tu nhien",
      description: "An toan cho suc khoe",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Thiet ke dang yeu",
      description: "Trang tri khong gian",
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Chat luong cao",
      description: "Chay deu, lau, thom",
    },
  ]

  const reviews = [
    {
      name: "Minh Anh",
      avatar: "/cute-girl-avatar-pink.jpg",
      comment: "Nen thom qua, mui de chiu lam! Minh rat thich design pastel de thuong.",
      rating: 5,
    },
    {
      name: "Thu Ha",
      avatar: "/cute-girl-avatar-cream.jpg",
      comment: "Dong goi can than, nen chay deu va lau. Se ung ho tiep!",
      rating: 5,
    },
    {
      name: "Linh Chi",
      avatar: "/cute-girl-avatar-beige.jpg",
      comment: "Mui huong thu gian, khong gat. Ca nha deu thich! Recommend nha.",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <FloatingParticles count={20} />

          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <motion.div
                className="space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge variant="secondary" className="rounded-full">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="mr-1"
                    >
                      ✨
                    </motion.span>
                    Handmade with love
                  </Badge>
                </motion.div>

                <motion.h1
                  className="font-serif text-4xl leading-tight text-balance md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Nen tinh dau cho nhung khoanh khac{" "}
                  <motion.span
                    className="text-primary"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,182,193,0.5)",
                        "0 0 20px rgba(255,182,193,0.8)",
                        "0 0 10px rgba(255,182,193,0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ngot ngao
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-lg text-muted-foreground text-pretty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Thap sang khong gian cua ban voi huong thom tu nhien, nhe nhang va dang yeu. Moi ngon nen la mot cau
                  chuyen handmade day tam huyet 🕯️🌸
                </motion.p>

                <motion.div
                  className="flex flex-col gap-3 sm:flex-row lg:justify-start justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="rounded-full" asChild>
                      <Link href="/shop">Kham pha bo suu tap</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                      <Link href="/about">Ve chung toi</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Hero Image with candle animations */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="relative mx-auto aspect-square max-w-md"
                  variants={floatVariants}
                  animate="animate"
                >
                  {/* Glow effect behind image */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <img
                    src="/beautiful-pastel-pink-candles-glowing-warm-light-a.jpg"
                    alt="Beautiful candles"
                    className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
                  />

                  {/* Animated sparkle */}
                  <motion.div
                    className="absolute -right-4 -top-4 text-6xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, 0],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ✨
                  </motion.div>

                  {/* Animated candle with flame */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 text-5xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🕯️
                    <motion.div
                      className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-t from-orange-400 to-yellow-200"
                      animate={{
                        scale: [1, 1.3, 0.9, 1.1, 1],
                        opacity: [1, 0.9, 1, 0.95, 1],
                      }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 rounded-full">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="mr-1"
                >
                  💕
                </motion.span>
                Best Sellers
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl">San pham yeu thich</h2>
              <p className="mt-2 text-muted-foreground">Nhung mui huong duoc chon nhieu nhat</p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {bestsellers.map((product, index) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Link href={`/product/${product.id}`}>
                    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
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
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                            >
                              <Badge className="absolute right-3 top-3 rounded-full">{product.badge}</Badge>
                            </motion.div>

                            {/* Hover glow effect */}
                            <motion.div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <div className="space-y-3 p-4">
                            <div>
                              <h3 className="font-medium">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.scent}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-lg text-primary">{product.price}</span>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileHover={{ scale: 1.05 }}
                                className="opacity-0 transition-opacity group-hover:opacity-100"
                              >
                                <Button size="sm" className="rounded-full">
                                  Them vao gio
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="rounded-full bg-transparent" asChild>
                  <Link href="/shop">Xem tat ca san pham</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl">Danh muc mui huong</h2>
              <p className="mt-2 text-muted-foreground">Tim huong thom phu hop voi tam trang</p>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.div key={category.name} variants={itemVariants}>
                  <Link href="/shop">
                    <motion.div
                      whileHover={{ y: -10, rotate: [0, -2, 2, 0] }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                        <CardContent className={`p-8 text-center ${category.color}`}>
                          <motion.div
                            className="mb-4 text-6xl"
                            animate={{
                              y: [0, -5, 0],
                              rotate: [-5, 5, -5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.5,
                            }}
                          >
                            {category.emoji}
                          </motion.div>
                          <h3 className="mb-2 font-serif text-xl">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl">Tai sao chon Mush?</h2>
              <p className="mt-2 text-muted-foreground">Nhung dieu lam nen cua chung minh dac biet</p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map((reason, index) => (
                <motion.div key={reason.title} className="text-center" variants={itemVariants}>
                  <motion.div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,182,193,0)",
                        "0 0 0 10px rgba(255,182,193,0.3)",
                        "0 0 0 0 rgba(255,182,193,0)",
                      ],
                    }}
                    // @ts-ignore
                    transition={{
                      boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 },
                    }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="mb-2 font-medium">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl">Khach hang noi gi</h2>
              <p className="mt-2 text-muted-foreground">Nhung danh gia yeu thuong tu khach hang</p>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reviews.map((review, index) => (
                <motion.div key={review.name} variants={itemVariants}>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <motion.div
                          className="mb-4 flex gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {[...Array(review.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                            >
                              <Star className="h-4 w-4 fill-primary text-primary" />
                            </motion.div>
                          ))}
                        </motion.div>
                        <p className="mb-4 text-sm leading-relaxed">{review.comment}</p>
                        <div className="flex items-center gap-3">
                          <motion.img
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            className="h-10 w-10 rounded-full object-cover"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <p className="text-xs text-muted-foreground">Khach hang than thiet</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="relative p-8 text-center md:p-12">
                  {/* Floating candle decorations */}
                  <motion.div
                    className="absolute left-10 top-10 text-3xl opacity-50"
                    animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🕯️
                  </motion.div>
                  <motion.div
                    className="absolute right-10 bottom-10 text-3xl opacity-50"
                    animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }}
                    transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🕯️
                  </motion.div>

                  <div className="relative mx-auto max-w-2xl space-y-4">
                    <motion.div
                      className="text-4xl"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🕯️✨💕
                    </motion.div>
                    <h2 className="font-serif text-3xl md:text-4xl">San sang tao khong gian thom lang man?</h2>
                    <p className="text-muted-foreground">
                      Kham pha bo suu tap nen handmade cua chung minh va tim huong thom yeu thich
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="rounded-full" asChild>
                        <Link href="/shop">Mua sam ngay</Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
