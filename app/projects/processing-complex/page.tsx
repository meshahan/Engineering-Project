import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Clock, CheckCircle, Factory } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Processing Complex | Petrochemical Facility Construction",
  description:
    "State-of-the-art petrochemical processing facility with integrated storage and distribution capabilities. $1.2B project completed in 48 months in Louisiana.",
  keywords:
    "industrial processing complex, petrochemical facility, processing plant construction, industrial construction",
}

const projectStats = [
  { icon: MapPin, label: "Location", value: "Louisiana, USA" },
  { icon: DollarSign, label: "Project Value", value: "$1.2 Billion" },
  { icon: Clock, label: "Duration", value: "48 Months" },
  { icon: Factory, label: "Capacity", value: "500,000 BPD" },
]

export default function ProcessingComplexProject() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EiovNm5zMZlCPvGueyCP18xUTIvVvG.jpeg"
          alt="Industrial Processing Complex"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 to-deep-navy/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-energy-orange text-white mb-4">Industrial Facility</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Industrial Processing Complex</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              State-of-the-art petrochemical processing facility with integrated storage and distribution
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

      {/* Project Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-energy-orange text-white">Project Overview</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
                  Advanced Petrochemical Processing
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  This world-class petrochemical processing complex represents the pinnacle of modern industrial
                  construction, featuring cutting-edge technology and environmental sustainability.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">Facility Components</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>Primary processing units with 500,000 BPD capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>Integrated storage terminal with 50 million barrel capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>Advanced environmental control systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>Automated loading and distribution facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-1miaflviD2mpw4kiTroOzScAYRSLzJ.jpeg"
                alt="Processing facility construction"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
          </div>
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
              <Link href="/projects/trans-regional-pipeline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Link>
            </Button>
            <Button className="bg-energy-orange hover:bg-energy-orange/90" asChild>
              <Link href="/projects/storage-expansion">
                Next Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
