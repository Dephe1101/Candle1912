import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      content: "hello@mushcandles.com",
      link: "mailto:hello@mushcandles.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Điện thoại",
      content: "0912 345 678",
      link: "tel:0912345678",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Địa chỉ",
      content: "123 Đường Pasteur, Q.1, TP.HCM",
      link: "#",
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
              <h1 className="font-serif text-4xl md:text-5xl">Liên hệ</h1>
              <p className="mt-2 text-muted-foreground">Chúng mình luôn sẵn sàng lắng nghe bạn</p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 font-serif text-2xl">Gửi tin nhắn cho chúng mình</h2>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input id="name" placeholder="Nguyễn Văn A" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@example.com" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input id="phone" placeholder="0912345678" className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Chủ đề</Label>
                        <Input id="subject" placeholder="Tôi muốn hỏi về..." className="rounded-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Tin nhắn</Label>
                        <Textarea
                          id="message"
                          placeholder="Nội dung tin nhắn của bạn..."
                          className="min-h-[150px] resize-none rounded-3xl"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full rounded-full">
                        Gửi tin nhắn
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="mb-6 font-serif text-2xl">Thông tin liên hệ</h2>
                <div className="space-y-6">
                  {/* Contact Cards */}
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <a href={info.link} className="flex items-start gap-4 transition-colors hover:text-primary">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="mb-1 font-medium">{info.title}</h3>
                            <p className="text-sm text-muted-foreground">{info.content}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Social Media */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-medium">Theo dõi chúng mình</h3>
                      <div className="flex gap-3">
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-transparent">
                          <Instagram className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-transparent">
                          <Facebook className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full bg-transparent">
                          <Mail className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Store Hours */}
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="mb-4 font-medium">Giờ làm việc</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Thứ 2 - Thứ 6:</span>
                          <span>9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Thứ 7 - Chủ nhật:</span>
                          <span>10:00 - 17:00</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
