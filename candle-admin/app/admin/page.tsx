"use client"

import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, FileText, DollarSign, Activity, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const stats = [
  {
    title: "Tổng người dùng",
    value: "12,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "So với tháng trước",
  },
  {
    title: "Tài liệu",
    value: "3,429",
    change: "+8.2%",
    trend: "up",
    icon: FileText,
    description: "Tài liệu được tạo",
  },
  {
    title: "Doanh thu",
    value: "₫45.2M",
    change: "-2.4%",
    trend: "down",
    icon: DollarSign,
    description: "Tổng doanh thu tháng này",
  },
  {
    title: "Hoạt động",
    value: "98.5%",
    change: "+0.3%",
    trend: "up",
    icon: Activity,
    description: "Thời gian hoạt động",
  },
]

const recentUsers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    role: "Admin",
    status: "active",
    avatar: "NVA",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@email.com",
    role: "Editor",
    status: "active",
    avatar: "TTB",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@email.com",
    role: "Viewer",
    status: "inactive",
    avatar: "LVC",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@email.com",
    role: "Editor",
    status: "active",
    avatar: "PTD",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoangvane@email.com",
    role: "Admin",
    status: "pending",
    avatar: "HVE",
  },
]

const recentActivities = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    action: "đã tạo tài liệu mới",
    target: "Báo cáo Q4 2024",
    time: "5 phút trước",
  },
  {
    id: 2,
    user: "Trần Thị B",
    action: "đã cập nhật",
    target: "Cài đặt hệ thống",
    time: "15 phút trước",
  },
  {
    id: 3,
    user: "Lê Văn C",
    action: "đã xóa",
    target: "Tài liệu cũ",
    time: "1 giờ trước",
  },
  {
    id: 4,
    user: "Admin",
    action: "đã thêm người dùng",
    target: "Phạm Thị D",
    time: "2 giờ trước",
  },
  {
    id: 5,
    user: "System",
    action: "đã sao lưu",
    target: "Cơ sở dữ liệu",
    time: "6 giờ trước",
  },
]

const storageUsage = [
  { name: "Tài liệu", used: 45, color: "bg-blue-500" },
  { name: "Hình ảnh", used: 28, color: "bg-green-500" },
  { name: "Video", used: 15, color: "bg-yellow-500" },
  { name: "Khác", used: 12, color: "bg-gray-500" },
]

export default function AdminDashboard() {
  return (
    <AdminLayout title="Tổng quan" breadcrumbs={[{ label: "Tổng quan" }]}>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="size-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="size-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span className="text-muted-foreground">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-7">
          {/* Recent Users */}
          <Card className="lg:col-span-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Người dùng gần đây</CardTitle>
                <CardDescription>Danh sách người dùng mới nhất trong hệ thống</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Xem tất cả
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9">
                        <AvatarImage src={`/.jpg?height=36&width=36&query=${user.name}`} />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          user.status === "active" ? "default" : user.status === "inactive" ? "secondary" : "outline"
                        }
                      >
                        {user.status === "active"
                          ? "Hoạt động"
                          : user.status === "inactive"
                            ? "Không hoạt động"
                            : "Chờ duyệt"}
                      </Badge>
                      <Badge variant="outline">{user.role}</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                          <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Xóa</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Hoạt động gần đây</CardTitle>
              <CardDescription>Các hoạt động mới nhất trong hệ thống</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="relative mt-1">
                      <div className="size-2 rounded-full bg-primary" />
                      {activity.id !== recentActivities.length && (
                        <div className="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-border" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">{activity.action}</span>{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Storage & Performance */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Storage Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Dung lượng lưu trữ</CardTitle>
              <CardDescription>Sử dụng 78.5GB / 100GB</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={78.5} className="h-2" />
              <div className="grid grid-cols-2 gap-4">
                {storageUsage.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className={`size-3 rounded-full ${item.color}`} />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="ml-auto text-sm font-medium">{item.used}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Hiệu suất hệ thống</CardTitle>
              <CardDescription>Tình trạng hoạt động của server</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>RAM</span>
                  <span className="font-medium">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Disk</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Network</span>
                  <span className="font-medium">23%</span>
                </div>
                <Progress value={23} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
