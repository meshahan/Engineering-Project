import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Wrench, Shield, Clock, Settings } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maintenance Services | Asset Integrity Management",
  description:
    "Comprehensive maintenance services including preventive maintenance, emergency repairs, integrity assessments, and equipment modernization for oil & gas facilities.",
  keywords: "maintenance services, asset integrity, preventive maintenance, emergency repairs, equipment modernization",
}

const maintenanceServices = [
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs to prevent equipment failures",
    icon: Clock,
    features: ["Routine inspections", "Scheduled overhauls", "Predictive maintenance", "Maintenance planning"],
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency response and repair services",
    icon: Wrench,
    features: ["Emergency response teams", "Rapid mobilization", "Critical repairs", "Temporary solutions"],
  },
  {
    title: "Integrity Assessments",
    description: "Comprehensive asset integrity and condition monitoring",
    icon: Shield,
    features: ["Pipeline integrity", "Structural assessments", "NDT inspections", "Risk assessments"],
  },
  {
    title: "Equipment Modernization",
    description: "Upgrading and modernizing existing equipment and systems",
    icon: Settings,
    features: ["Technology upgrades", "Efficiency improvements", "Safety enhancements", "Compliance updates"],
  },
]

export default function MaintenanceServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="Maintenance Services"
        title="Comprehensive Asset Management"
        description="Ensuring optimal performance and longevity of your oil & gas assets through preventive maintenance, emergency response, and integrity management programs."
        primaryCta={{ text: "Request Quote", href: "/contact" }}
        secondaryCta={{ text: "View Maintenance Projects", href: "/projects" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EiovNm5zMZlCPvGueyCP18xUTIvVvG.jpeg"
      />

      {/* Services Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Maintenance Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Complete Maintenance Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive maintenance services ensure maximum uptime, safety, and efficiency for your critical
              energy infrastructure assets.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <StaggeredItem key={service.title}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-industrial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Optimize Your Asset Performance</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our maintenance specialists to develop a customized maintenance program for your facilities.
          </p>
          <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
            <Link href="/contact">
              Get Maintenance Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
