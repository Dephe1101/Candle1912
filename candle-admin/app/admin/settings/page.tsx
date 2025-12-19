"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Globe,
  Bell,
  Shield,
  Palette,
  Mail,
  Upload,
  Save,
  Key,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Languages,
} from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <AdminLayout title="Cài đặt" breadcrumbs={[{ label: "Cài đặt" }]}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Cài đặt hệ thống</h2>
          <p className="text-muted-foreground">Quản lý cấu hình và tùy chỉnh hệ thống</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-none">
            <TabsTrigger value="general" className="gap-2">
              <Building2 className="size-4" />
              <span className="hidden lg:inline">Chung</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="gap-2">
              <Palette className="size-4" />
              <span className="hidden lg:inline">Giao diện</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="size-4" />
              <span className="hidden lg:inline">Thông báo</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="size-4" />
              <span className="hidden lg:inline">Bảo mật</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="gap-2">
              <Globe className="size-4" />
              <span className="hidden lg:inline">Tích hợp</span>
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin tổ chức</CardTitle>
                <CardDescription>Cập nhật thông tin cơ bản về tổ chức của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="size-20">
                    <AvatarImage src="/generic-company-logo.png" />
                    <AvatarFallback>CO</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 size-4" />
                      Tải lên logo
                    </Button>
                    <p className="text-xs text-muted-foreground">PNG, JPG hoặc GIF. Tối đa 2MB.</p>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Tên tổ chức</Label>
                    <Input id="orgName" defaultValue="Công ty ABC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="domain">Tên miền</Label>
                    <Input id="domain" defaultValue="abc.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email liên hệ</Label>
                    <Input id="email" type="email" defaultValue="contact@abc.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" defaultValue="+84 123 456 789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Textarea id="address" defaultValue="123 Đường ABC, Quận 1, TP. Hồ Chí Minh" rows={3} />
                </div>

                <div className="flex justify-end">
                  <Button>
                    <Save className="mr-2 size-4" />
                    Lưu thay đổi
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ngôn ngữ & Khu vực</CardTitle>
                <CardDescription>Cài đặt ngôn ngữ và múi giờ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Ngôn ngữ</Label>
                    <Select defaultValue="vi">
                      <SelectTrigger>
                        <Languages className="mr-2 size-4" />
                        <SelectValue placeholder="Chọn ngôn ngữ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vi">Tiếng Việt</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                        <SelectItem value="ko">한국어</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Múi giờ</Label>
                    <Select defaultValue="asia-hcm">
                      <SelectTrigger>
                        <Globe className="mr-2 size-4" />
                        <SelectValue placeholder="Chọn múi giờ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-hcm">(GMT+7) Hồ Chí Minh</SelectItem>
                        <SelectItem value="asia-tokyo">(GMT+9) Tokyo</SelectItem>
                        <SelectItem value="utc">(GMT+0) UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Giao diện</CardTitle>
                <CardDescription>Tùy chỉnh giao diện hiển thị</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-muted p-2">
                      {darkMode ? <Moon className="size-5" /> : <Sun className="size-5" />}
                    </div>
                    <div>
                      <p className="font-medium">Chế độ tối</p>
                      <p className="text-sm text-muted-foreground">Chuyển đổi giữa giao diện sáng và tối</p>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Chủ đề màu sắc</Label>
                  <div className="grid grid-cols-5 gap-3">
                    {[
                      { name: "Xanh", color: "bg-blue-500" },
                      { name: "Tím", color: "bg-purple-500" },
                      { name: "Xanh lá", color: "bg-green-500" },
                      { name: "Cam", color: "bg-orange-500" },
                      { name: "Hồng", color: "bg-pink-500" },
                    ].map((theme) => (
                      <button
                        key={theme.name}
                        className="flex flex-col items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-muted"
                      >
                        <div className={`size-8 rounded-full ${theme.color}`} />
                        <span className="text-xs">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Kích thước chữ</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Chọn kích thước" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Nhỏ</SelectItem>
                      <SelectItem value="medium">Trung bình</SelectItem>
                      <SelectItem value="large">Lớn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt thông báo</CardTitle>
                <CardDescription>Quản lý cách bạn nhận thông báo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-muted p-2">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="font-medium">Thông báo email</p>
                      <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
                    </div>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-muted p-2">
                      <Smartphone className="size-5" />
                    </div>
                    <div>
                      <p className="font-medium">Thông báo đẩy</p>
                      <p className="text-sm text-muted-foreground">Nhận thông báo trên thiết bị di động</p>
                    </div>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Loại thông báo</Label>
                  <div className="space-y-3">
                    {[
                      { label: "Người dùng mới đăng ký", enabled: true },
                      { label: "Bình luận mới", enabled: true },
                      { label: "Báo cáo hệ thống", enabled: false },
                      { label: "Cập nhật bảo mật", enabled: true },
                      { label: "Thông báo marketing", enabled: false },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-sm">{item.label}</span>
                        <Switch defaultChecked={item.enabled} />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bảo mật tài khoản</CardTitle>
                <CardDescription>Quản lý cài đặt bảo mật</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-muted p-2">
                      <Key className="size-5" />
                    </div>
                    <div>
                      <p className="font-medium">Xác thực hai yếu tố</p>
                      <p className="text-sm text-muted-foreground">Thêm lớp bảo mật cho tài khoản</p>
                    </div>
                  </div>
                  <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Đổi mật khẩu</Label>
                  <div className="grid gap-4 md:max-w-md">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Mật khẩu mới</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button className="w-fit">Cập nhật mật khẩu</Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Phiên đăng nhập</p>
                      <p className="text-sm text-muted-foreground">Quản lý các thiết bị đang đăng nhập</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Xem tất cả
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { device: "MacBook Pro", location: "TP. Hồ Chí Minh", current: true },
                      { device: "iPhone 14", location: "Hà Nội", current: false },
                      { device: "Windows PC", location: "Đà Nẵng", current: false },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                          <Monitor className="size-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">
                              {session.device}
                              {session.current && (
                                <Badge variant="secondary" className="ml-2">
                                  Hiện tại
                                </Badge>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">{session.location}</p>
                          </div>
                        </div>
                        {!session.current && (
                          <Button variant="ghost" size="sm" className="text-destructive">
                            Đăng xuất
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tích hợp bên thứ ba</CardTitle>
                <CardDescription>Kết nối với các dịch vụ bên ngoài</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Google Workspace",
                    description: "Đồng bộ với Google Drive, Calendar",
                    connected: true,
                  },
                  {
                    name: "Slack",
                    description: "Nhận thông báo qua Slack",
                    connected: true,
                  },
                  {
                    name: "Microsoft 365",
                    description: "Tích hợp với Office 365",
                    connected: false,
                  },
                  {
                    name: "Zapier",
                    description: "Tự động hóa quy trình làm việc",
                    connected: false,
                  },
                ].map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                        <Globe className="size-5" />
                      </div>
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                      </div>
                    </div>
                    <Button variant={integration.connected ? "outline" : "default"} size="sm">
                      {integration.connected ? "Đã kết nối" : "Kết nối"}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
