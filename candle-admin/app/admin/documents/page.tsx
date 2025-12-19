"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Plus,
  MoreHorizontal,
  Grid3X3,
  List,
  FileText,
  FileImage,
  FileSpreadsheet,
  File,
  Download,
  Trash2,
  Edit,
  Eye,
  Share2,
  FolderOpen,
  Clock,
  HardDrive,
} from "lucide-react"

const documents = [
  {
    id: 1,
    name: "Báo cáo Q4 2024",
    type: "pdf",
    size: "2.4 MB",
    category: "Báo cáo",
    author: "Nguyễn Văn A",
    updatedAt: "2 giờ trước",
    status: "published",
  },
  {
    id: 2,
    name: "Thiết kế UI/UX Dashboard",
    type: "image",
    size: "15.8 MB",
    category: "Thiết kế",
    author: "Trần Thị B",
    updatedAt: "5 giờ trước",
    status: "published",
  },
  {
    id: 3,
    name: "Bảng lương tháng 12",
    type: "excel",
    size: "856 KB",
    category: "Tài chính",
    author: "Lê Văn C",
    updatedAt: "1 ngày trước",
    status: "draft",
  },
  {
    id: 4,
    name: "Kế hoạch marketing 2025",
    type: "doc",
    size: "1.2 MB",
    category: "Marketing",
    author: "Phạm Thị D",
    updatedAt: "2 ngày trước",
    status: "review",
  },
  {
    id: 5,
    name: "Hợp đồng đối tác ABC",
    type: "pdf",
    size: "3.1 MB",
    category: "Pháp lý",
    author: "Hoàng Văn E",
    updatedAt: "3 ngày trước",
    status: "published",
  },
  {
    id: 6,
    name: "Ảnh sự kiện công ty",
    type: "image",
    size: "45.2 MB",
    category: "Media",
    author: "Vũ Thị F",
    updatedAt: "1 tuần trước",
    status: "published",
  },
]

const stats = [
  { title: "Tổng tài liệu", value: "3,429", icon: FileText, color: "text-blue-500" },
  { title: "Thư mục", value: "156", icon: FolderOpen, color: "text-yellow-500" },
  { title: "Dung lượng", value: "78.5 GB", icon: HardDrive, color: "text-green-500" },
  { title: "Cập nhật gần đây", value: "24", icon: Clock, color: "text-purple-500" },
]

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [selectedDocs, setSelectedDocs] = useState<number[]>([])

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "doc":
        return <FileText className="size-10 text-blue-500" />
      case "image":
        return <FileImage className="size-10 text-green-500" />
      case "excel":
        return <FileSpreadsheet className="size-10 text-emerald-500" />
      default:
        return <File className="size-10 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500/10 text-green-500">Đã xuất bản</Badge>
      case "draft":
        return <Badge variant="secondary">Bản nháp</Badge>
      case "review":
        return <Badge className="bg-yellow-500/10 text-yellow-500">Đang duyệt</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const toggleSelect = (id: number) => {
    if (selectedDocs.includes(id)) {
      setSelectedDocs(selectedDocs.filter((i) => i !== id))
    } else {
      setSelectedDocs([...selectedDocs, id])
    }
  }

  return (
    <AdminLayout title="Quản lý tài liệu" breadcrumbs={[{ label: "Quản lý tài liệu" }]}>
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

        {/* Documents List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Danh sách tài liệu</CardTitle>
                <CardDescription>Quản lý tất cả tài liệu trong hệ thống</CardDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                  <Input placeholder="Tìm kiếm tài liệu..." className="w-64 pl-8" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="report">Báo cáo</SelectItem>
                    <SelectItem value="design">Thiết kế</SelectItem>
                    <SelectItem value="finance">Tài chính</SelectItem>
                    <SelectItem value="legal">Pháp lý</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center rounded-md border">
                  <Button
                    variant={viewMode === "list" ? "secondary" : "ghost"}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="size-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "secondary" : "ghost"}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="size-4" />
                  </Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="mr-2 size-4" />
                      Tải lên
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Tải lên tài liệu mới</DialogTitle>
                      <DialogDescription>Chọn file và điền thông tin để tải lên tài liệu</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-center justify-center rounded-lg border-2 border-dashed p-8">
                        <div className="text-center">
                          <FileText className="mx-auto size-10 text-muted-foreground" />
                          <p className="mt-2 text-sm font-medium">Kéo thả file vào đây</p>
                          <p className="text-xs text-muted-foreground">hoặc click để chọn file</p>
                          <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                            Chọn file
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="docName">Tên tài liệu</Label>
                        <Input id="docName" placeholder="Nhập tên tài liệu" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="docCategory">Danh mục</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn danh mục" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="report">Báo cáo</SelectItem>
                            <SelectItem value="design">Thiết kế</SelectItem>
                            <SelectItem value="finance">Tài chính</SelectItem>
                            <SelectItem value="legal">Pháp lý</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="docDesc">Mô tả</Label>
                        <Textarea id="docDesc" placeholder="Nhập mô tả tài liệu" rows={3} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Hủy</Button>
                      <Button>Tải lên</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {selectedDocs.length > 0 && (
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted p-2">
                <span className="text-sm text-muted-foreground">Đã chọn {selectedDocs.length} tài liệu</span>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 size-4" />
                  Tải xuống
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 size-4" />
                  Chia sẻ
                </Button>
                <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                  <Trash2 className="mr-2 size-4" />
                  Xóa
                </Button>
              </div>
            )}

            {viewMode === "list" ? (
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <Checkbox checked={selectedDocs.includes(doc.id)} onCheckedChange={() => toggleSelect(doc.id)} />
                    {getFileIcon(doc.type)}
                    <div className="flex-1">
                      <p className="font-medium">{doc.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.category}</span>
                        <span>•</span>
                        <span>{doc.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(doc.status)}
                      <span className="text-sm text-muted-foreground">{doc.updatedAt}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 size-4" />
                            Xem
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 size-4" />
                            Tải xuống
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 size-4" />
                            Chỉnh sửa
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="mr-2 size-4" />
                            Chia sẻ
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 size-4" />
                            Xóa
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="group relative rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="absolute right-2 top-2">
                      <Checkbox checked={selectedDocs.includes(doc.id)} onCheckedChange={() => toggleSelect(doc.id)} />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      {getFileIcon(doc.type)}
                      <p className="mt-3 font-medium line-clamp-2">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.size}</p>
                      <div className="mt-2">{getStatusBadge(doc.status)}</div>
                      <p className="mt-2 text-xs text-muted-foreground">{doc.updatedAt}</p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1 rounded-b-lg bg-background/80 p-2 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <Button variant="ghost" size="icon" className="size-8">
                        <Eye className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8">
                        <Download className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8">
                        <Share2 className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8 text-destructive">
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <p>Hiển thị 1-6 của 3,429 tài liệu</p>
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
