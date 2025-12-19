"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid gap-8 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-2">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-2xl">🕯️</span>
              </motion.div>
              <span className="font-serif text-2xl font-normal text-primary">Mush</span>
            </div>
            <p className="text-sm text-muted-foreground">Nen thom handmade cho nhung khoanh khac ngot ngao cua ban</p>
            <div className="flex gap-2">
              {[Instagram, Facebook, Mail].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-medium">Lien ket nhanh</h3>
            <ul className="space-y-2 text-sm">
              {["San pham", "Ve chung toi", "Blog", "Lien he"].map((item, index) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Care */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-medium">Cham soc khach hang</h3>
            <ul className="space-y-2 text-sm">
              {["Chinh sach doi tra", "Huong dan mua hang", "Chinh sach bao mat", "Dieu khoan dich vu"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-medium">Nhan tin moi</h3>
            <p className="mb-4 text-sm text-muted-foreground">Dang ky de nhan thong tin san pham moi va uu dai</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email cua ban" className="h-9 rounded-full" />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" size="sm" className="rounded-full">
                  Dang ky
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Decorative candles */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="text-2xl"
              animate={{
                y: [0, -5, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              🕯️
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Mush Candles. Handcrafted with love.</p>
        </motion.div>
      </div>
    </footer>
  )
}
