import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Leaf, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Làm bằng tình yêu",
      description: "Mỗi ngọn nến được làm thủ công với tình yêu và sự tỉ mỉ trong từng chi tiết",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Tự nhiên & an toàn",
      description: "Sử dụng 100% sáp đậu nành tự nhiên và tinh dầu nguyên chất, an toàn cho sức khỏe",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Thiết kế độc đáo",
      description: "Mỗi sản phẩm đều có thiết kế pastel dễ thương, hoàn hảo để trang trí không gian",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Chất lượng cao",
      description: "Cam kết chất lượng với nến cháy đều, lâu và tỏa hương thơm nhẹ nhàng",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 rounded-full">
                Câu chuyện của chúng mình
              </Badge>
              <h1 className="font-serif text-4xl text-balance md:text-5xl">Về Mush Candles</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Thắp sáng không gian của bạn với những ngọn nến handmade đầy tâm huyết
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-3xl md:text-4xl">Câu chuyện bắt đầu từ tình yêu nến thơm</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mush Candles ra đời từ niềm đam mê với những mùi hương tự nhiên và khát khao mang đến cho mọi người
                    những khoảnh khắc thư giãn, ấm áp trong cuộc sống bận rộn.
                  </p>
                  <p>
                    Mỗi ngọn nến của chúng mình đều được làm thủ công tỉ mỉ, từ việc lựa chọn nguyên liệu tự nhiên cho
                    đến thiết kế bao bì pastel dễ thương. Chúng mình tin rằng một ngọn nến không chỉ là nguồn ánh sáng,
                    mà còn là cách để bạn tự chăm sóc bản thân và tạo nên những kỷ niệm đẹp.
                  </p>
                  <p>
                    Với Mush, mỗi sản phẩm đều mang trong mình câu chuyện và tình yêu của người làm ra nó. Chúng mình hy
                    vọng những ngọn nến của mình sẽ mang đến cho bạn những phút giây bình yên và ngọt ngào.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/about-handmaking-candles-pastel-workspace.jpg"
                  alt="Making candles"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl">Giá trị cốt lõi</h2>
              <p className="mt-2 text-muted-foreground">Những điều chúng mình tin tưởng và theo đuổi</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-0 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      {value.icon}
                    </div>
                    <h3 className="mb-2 font-medium">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl">Quy trình làm nến</h2>
              <p className="mt-2 text-muted-foreground">Từ nguyên liệu tự nhiên đến sản phẩm hoàn thiện</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    1
                  </div>
                  <h3 className="mb-2 font-medium">Chọn nguyên liệu</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lựa chọn sáp đậu nành tự nhiên, tinh dầu nguyên chất và bấc cotton không chì
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    2
                  </div>
                  <h3 className="mb-2 font-medium">Pha chế & đổ khuôn</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Đun chảy sáp ở nhiệt độ phù hợp, trộn tinh dầu và đổ vào khuôn với tỉ lệ hoàn hảo
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    3
                  </div>
                  <h3 className="mb-2 font-medium">Hoàn thiện & đóng gói</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Để nến đông đặc, kiểm tra chất lượng và đóng gói cẩn thận với thiết kế pastel dễ thương
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
