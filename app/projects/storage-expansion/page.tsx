import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Clock, Fuel } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Storage Terminal Expansion | Crude Oil Storage Facility",
  description:
    "Major expansion of crude oil storage terminal including new tank farms and loading facilities. $450M project completed in 24 months in Oklahoma.",
  keywords: "storage terminal expansion, crude oil storage, tank farms, storage facility construction",
}

const projectStats = [
  { icon: MapPin, label: "Location", value: "Oklahoma, USA" },
  { icon: DollarSign, label: "Project Value", value: "$450 Million" },
  { icon: Clock, label: "Duration", value: "24 Months" },
  { icon: Fuel, label: "Capacity", value: "25M Barrels" },
]

export default function StorageExpansionProject() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-1miaflviD2mpw4kiTroOzScAYRSLzJ.jpeg"
          alt="Storage Terminal Expansion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 to-deep-navy/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-energy-orange text-white mb-4">Storage Facility</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Storage Terminal Expansion</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Major expansion of crude oil storage terminal with new tank farms and loading facilities
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <StaggeredItem key={stat.label}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-deep-navy mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Navigation */}
      <AnimatedSection className="py-12 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white bg-transparent"
              asChild
            >
              <Link href="/projects/processing-complex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white bg-transparent"
              asChild
            >
              <Link href="/projects">
                <ArrowRight className="ml-2 h-4 w-4" />
                All Projects
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
