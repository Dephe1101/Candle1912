import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Cách chọn mùi hương nến phù hợp với từng không gian",
      excerpt:
        "Mỗi không gian trong nhà cần một mùi hương khác nhau để tạo cảm giác thoải mái. Cùng tìm hiểu cách chọn nến phù hợp nhé!",
      image: "/blog-choosing-candle-scents-pastel.jpg",
      category: "Hướng dẫn",
      date: "15 Tháng 1, 2025",
      readTime: "5 phút đọc",
    },
    {
      id: 2,
      title: "5 lợi ích của việc thắp nến thơm mỗi ngày",
      excerpt:
        "Thắp nến không chỉ tạo không gian ấm cúng mà còn mang lại nhiều lợi ích tuyệt vời cho sức khỏe tinh thần.",
      image: "/blog-candle-benefits-relaxing-space.jpg",
      category: "Lifestyle",
      date: "10 Tháng 1, 2025",
      readTime: "4 phút đọc",
    },
    {
      id: 3,
      title: "Hướng dẫn sử dụng và bảo quản nến đúng cách",
      excerpt: "Để nến cháy lâu và đều, bạn cần biết cách sử dụng và bảo quản đúng. Cùng xem các mẹo hay nhé!",
      image: "/blog-candle-care-tips-pastel.jpg",
      category: "Tips & Tricks",
      date: "5 Tháng 1, 2025",
      readTime: "6 phút đọc",
    },
    {
      id: 4,
      title: "Tạo không gian thư giãn hoàn hảo với nến thơm",
      excerpt: "Khám phá cách kết hợp nến thơm, ánh sáng và trang trí để tạo góc thư giãn mơ ước tại nhà.",
      image: "/blog-relaxing-space-candles-decor.jpg",
      category: "Lifestyle",
      date: "28 Tháng 12, 2024",
      readTime: "5 phút đọc",
    },
    {
      id: 5,
      title: "Những mùi hương giúp giảm căng thẳng hiệu quả",
      excerpt: "Lavender, chamomile hay peppermint? Tìm hiểu các mùi hương có tác dụng giảm stress tốt nhất.",
      image: "/blog-stress-relief-scents-lavender.jpg",
      category: "Sức khỏe",
      date: "20 Tháng 12, 2024",
      readTime: "4 phút đọc",
    },
    {
      id: 6,
      title: "Ý tưởng quà tặng nến thơm cho người thân yêu",
      excerpt: "Nến thơm là món quà ý nghĩa và thiết thực. Cùng xem các ý tưởng gift set đáng yêu nhé!",
      image: "/blog-candle-gift-ideas-cute-packaging.jpg",
      category: "Gift Guide",
      date: "15 Tháng 12, 2024",
      readTime: "3 phút đọc",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="border-b bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="font-serif text-4xl md:text-5xl">Blog & Tips</h1>
              <p className="mt-2 text-muted-foreground">Chia sẻ kiến thức và cảm hứng về nến thơm</p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group h-full overflow-hidden border-0 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <Badge className="absolute left-4 top-4 rounded-full">{post.category}</Badge>
                      </div>
                      <div className="space-y-3 p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="font-medium leading-snug text-balance group-hover:text-primary">{post.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
