"use client"

import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Download, Calendar, Eye, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const userGrowthData = [
  { month: "T1", users: 2400 },
  { month: "T2", users: 1398 },
  { month: "T3", users: 9800 },
  { month: "T4", users: 3908 },
  { month: "T5", users: 4800 },
  { month: "T6", users: 3800 },
  { month: "T7", users: 4300 },
  { month: "T8", users: 5600 },
  { month: "T9", users: 6200 },
  { month: "T10", users: 7100 },
  { month: "T11", users: 8500 },
  { month: "T12", users: 12847 },
]

const revenueData = [
  { month: "T1", revenue: 15000000, target: 12000000 },
  { month: "T2", revenue: 18000000, target: 15000000 },
  { month: "T3", revenue: 22000000, target: 18000000 },
  { month: "T4", revenue: 28000000, target: 25000000 },
  { month: "T5", revenue: 35000000, target: 30000000 },
  { month: "T6", revenue: 45200000, target: 40000000 },
]

const trafficSourceData = [
  { name: "Tìm kiếm tự nhiên", value: 45, color: "#3b82f6" },
  { name: "Trực tiếp", value: 25, color: "#22c55e" },
  { name: "Mạng xã hội", value: 18, color: "#f59e0b" },
  { name: "Giới thiệu", value: 12, color: "#ef4444" },
]

const departmentData = [
  { department: "IT", active: 45, inactive: 5 },
  { department: "Marketing", active: 28, inactive: 3 },
  { department: "Sales", active: 35, inactive: 8 },
  { department: "HR", active: 12, inactive: 2 },
  { department: "Finance", active: 18, inactive: 4 },
]

const topPages = [
  { page: "/dashboard", views: 12450, percentage: 28 },
  { page: "/products", views: 8320, percentage: 19 },
  { page: "/users", views: 6540, percentage: 15 },
  { page: "/reports", views: 5210, percentage: 12 },
  { page: "/settings", views: 4180, percentage: 9 },
]

const metrics = [
  {
    title: "Tổng lượt xem",
    value: "128,450",
    change: "+14.2%",
    trend: "up",
    icon: Eye,
    description: "So với tháng trước",
  },
  {
    title: "Thời gian trung bình",
    value: "4m 32s",
    change: "+8.5%",
    trend: "up",
    icon: Clock,
    description: "Trên mỗi phiên",
  },
  {
    title: "Tỷ lệ thoát",
    value: "32.4%",
    change: "-5.2%",
    trend: "down",
    icon: TrendingDown,
    description: "Giảm so với tháng trước",
  },
  {
    title: "Chuyển đổi",
    value: "8.7%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    description: "Tỷ lệ chuyển đổi",
  },
]

export default function ReportsPage() {
  return (
    <AdminLayout title="Báo cáo & Thống kê" breadcrumbs={[{ label: "Báo cáo & Thống kê" }]}>
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Báo cáo tổng quan</h2>
            <p className="text-muted-foreground">Phân tích dữ liệu và thống kê hệ thống</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-40">
                <Calendar className="mr-2 size-4" />
                <SelectValue placeholder="Chọn thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 ngày qua</SelectItem>
                <SelectItem value="30days">30 ngày qua</SelectItem>
                <SelectItem value="90days">90 ngày qua</SelectItem>
                <SelectItem value="year">Năm nay</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 size-4" />
              Xuất báo cáo
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                <metric.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 text-xs">
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="size-3 text-green-500" />
                  ) : (
                    <ArrowDownRight className="size-3 text-green-500" />
                  )}
                  <span className="text-green-500">{metric.change}</span>
                  <span className="text-muted-foreground">{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Tabs */}
        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Người dùng</TabsTrigger>
            <TabsTrigger value="revenue">Doanh thu</TabsTrigger>
            <TabsTrigger value="traffic">Lưu lượng</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-7">
              <Card className="lg:col-span-5">
                <CardHeader>
                  <CardTitle>Tăng trưởng người dùng</CardTitle>
                  <CardDescription>Số lượng người dùng mới theo tháng</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={userGrowthData}>
                      <defs>
                        <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        fill="url(#userGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Theo phòng ban</CardTitle>
                  <CardDescription>Phân bố người dùng</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={departmentData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" className="text-xs" />
                      <YAxis dataKey="department" type="category" className="text-xs" width={60} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="active" fill="hsl(var(--primary))" name="Hoạt động" radius={4} />
                      <Bar dataKey="inactive" fill="hsl(var(--muted-foreground))" name="Không hoạt động" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Doanh thu theo tháng</CardTitle>
                <CardDescription>So sánh doanh thu thực tế và mục tiêu</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--popover))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) =>
                        new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(value)
                      }
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      name="Doanh thu"
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="hsl(var(--muted-foreground))"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Mục tiêu"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Nguồn lưu lượng</CardTitle>
                  <CardDescription>Phân bố theo nguồn truy cập</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={trafficSourceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {trafficSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--popover))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trang được xem nhiều nhất</CardTitle>
                  <CardDescription>Top 5 trang có lượt xem cao nhất</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPages.map((page, index) => (
                      <div key={page.page} className="flex items-center gap-4">
                        <div className="flex size-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{page.page}</p>
                            <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} lượt xem</p>
                          </div>
                          <div className="mt-1 h-2 w-full rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${page.percentage}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
