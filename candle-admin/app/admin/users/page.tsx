"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Search,
  Plus,
  MoreHorizontal,
  Filter,
  Download,
  Upload,
  Trash2,
  Edit,
  Eye,
  Mail,
  Shield,
  Users,
  UserCheck,
  UserX,
} from "lucide-react"

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    role: "Super Admin",
    status: "active",
    avatar: "NVA",
    department: "IT",
    joinDate: "15/01/2024",
    lastActive: "5 phút trước",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@email.com",
    role: "Admin",
    status: "active",
    avatar: "TTB",
    department: "Marketing",
    joinDate: "20/02/2024",
    lastActive: "1 giờ trước",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "levanc@email.com",
    role: "Editor",
    status: "inactive",
    avatar: "LVC",
    department: "Content",
    joinDate: "10/03/2024",
    lastActive: "3 ngày trước",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@email.com",
    role: "Editor",
    status: "active",
    avatar: "PTD",
    department: "Design",
    joinDate: "05/04/2024",
    lastActive: "30 phút trước",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoangvane@email.com",
    role: "Viewer",
    status: "pending",
    avatar: "HVE",
    department: "Sales",
    joinDate: "18/05/2024",
    lastActive: "Chưa đăng nhập",
  },
  {
    id: 6,
    name: "Vũ Thị F",
    email: "vuthif@email.com",
    role: "Editor",
    status: "active",
    avatar: "VTF",
    department: "HR",
    joinDate: "22/06/2024",
    lastActive: "2 giờ trước",
  },
  {
    id: 7,
    name: "Đặng Văn G",
    email: "dangvang@email.com",
    role: "Viewer",
    status: "active",
    avatar: "DVG",
    department: "Finance",
    joinDate: "30/07/2024",
    lastActive: "15 phút trước",
  },
  {
    id: 8,
    name: "Bùi Thị H",
    email: "buithih@email.com",
    role: "Admin",
    status: "suspended",
    avatar: "BTH",
    department: "Operations",
    joinDate: "12/08/2024",
    lastActive: "1 tuần trước",
  },
]

const stats = [
  { title: "Tổng người dùng", value: "128", icon: Users, color: "text-blue-500" },
  { title: "Đang hoạt động", value: "98", icon: UserCheck, color: "text-green-500" },
  { title: "Không hoạt động", value: "23", icon: UserX, color: "text-yellow-500" },
  { title: "Đã khóa", value: "7", icon: Shield, color: "text-red-500" },
]

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map((u) => u.id))
    }
  }

  const toggleSelect = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter((i) => i !== id))
    } else {
      setSelectedUsers([...selectedUsers, id])
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Hoạt động</Badge>
      case "inactive":
        return <Badge variant="secondary">Không hoạt động</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">Chờ duyệt</Badge>
      case "suspended":
        return <Badge variant="destructive">Đã khóa</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Super Admin":
        return <Badge className="bg-purple-500/10 text-purple-500">{role}</Badge>
      case "Admin":
        return <Badge className="bg-blue-500/10 text-blue-500">{role}</Badge>
      case "Editor":
        return <Badge className="bg-orange-500/10 text-orange-500">{role}</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  return (
    <AdminLayout title="Quản lý người dùng" breadcrumbs={[{ label: "Quản lý người dùng" }]}>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="flex items-center gap-4 p-4">
                <div className={`rounded-lg bg-muted p-2 ${stat.color}`}>
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Danh sách người dùng</CardTitle>
                <CardDescription>Quản lý tất cả người dùng trong hệ thống</CardDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Tìm kiếm người dùng..."
                    className="w-64 pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="size-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 size-4" />
                  Xuất
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 size-4" />
                  Nhập
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="mr-2 size-4" />
                      Thêm người dùng
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Thêm người dùng mới</DialogTitle>
                      <DialogDescription>Điền thông tin để tạo tài khoản người dùng mới</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Họ và tên</Label>
                        <Input id="name" placeholder="Nhập họ và tên" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Nhập email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="department">Phòng ban</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn phòng ban" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="it">IT</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="hr">HR</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="role">Vai trò</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn vai trò" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Hủy</Button>
                      <Button>Tạo người dùng</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {selectedUsers.length > 0 && (
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted p-2">
                <span className="text-sm text-muted-foreground">Đã chọn {selectedUsers.length} người dùng</span>
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 size-4" />
                  Gửi email
                </Button>
                <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                  <Trash2 className="mr-2 size-4" />
                  Xóa
                </Button>
              </div>
            )}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox checked={selectedUsers.length === users.length} onCheckedChange={toggleSelectAll} />
                    </TableHead>
                    <TableHead>Người dùng</TableHead>
                    <TableHead>Phòng ban</TableHead>
                    <TableHead>Vai trò</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Ngày tham gia</TableHead>
                    <TableHead>Hoạt động cuối</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedUsers.includes(user.id)}
                          onCheckedChange={() => toggleSelect(user.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="size-8">
                            <AvatarImage src={`/.jpg?height=32&width=32&query=${user.name}`} />
                            <AvatarFallback>{user.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{getRoleBadge(user.role)}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell className="text-muted-foreground">{user.joinDate}</TableCell>
                      <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                              <MoreHorizontal className="size-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 size-4" />
                              Xem chi tiết
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 size-4" />
                              Chỉnh sửa
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 size-4" />
                              Gửi email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 size-4" />
                              Xóa người dùng
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <p>Hiển thị 1-8 của 128 người dùng</p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Trước
                </Button>
                <Button variant="outline" size="sm">
                  Sau
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
