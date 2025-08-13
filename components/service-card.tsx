"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  href: string
  index?: number
}

export function ServiceCard({ title, description, icon: Icon, features, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-energy-orange to-petrol-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-lg">
          <div className="bg-white rounded-lg h-full w-full" />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-serif font-bold text-deep-navy group-hover:text-energy-orange transition-colors">
              {title}
            </h3>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col space-y-4">
            <p className="text-muted-foreground text-center">{description}</p>

            <ul className="space-y-2 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-energy-orange rounded-full mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full group-hover:bg-energy-orange group-hover:text-white group-hover:border-energy-orange transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href={href}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
}
