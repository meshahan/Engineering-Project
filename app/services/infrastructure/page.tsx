import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Radio, Settings, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Infrastructure Development | Power & Control Systems",
  description:
    "Critical infrastructure development including power generation, electrical systems, control automation, and telecommunications for energy sector operations.",
  keywords: "infrastructure development, power generation, electrical systems, control automation, telecommunications",
}

const infrastructureServices = [
  {
    title: "Power Generation",
    description: "Reliable power generation systems for industrial operations",
    icon: Zap,
    features: [
      "Gas turbine installations",
      "Diesel generator systems",
      "Solar power integration",
      "Backup power solutions",
    ],
  },
  {
    title: "Electrical Systems",
    description: "Complete electrical infrastructure and distribution networks",
    icon: Settings,
    features: ["High-voltage substations", "Distribution panels", "Motor control centers", "Lighting systems"],
  },
  {
    title: "Control & Automation",
    description: "Advanced process control and automation systems",
    icon: Radio,
    features: ["SCADA systems", "PLC programming", "HMI development", "Safety instrumented systems"],
  },
  {
    title: "Telecommunications",
    description: "Communication infrastructure for remote operations",
    icon: Shield,
    features: ["Fiber optic networks", "Wireless communication", "Satellite systems", "Emergency communications"],
  },
]

export default function InfrastructureServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="Infrastructure Development"
        title="Critical Infrastructure Systems"
        description="Building essential infrastructure systems including power generation, electrical distribution, control automation, and telecommunications for reliable energy operations."
        primaryCta={{ text: "Request Quote", href: "/contact" }}
        secondaryCta={{ text: "View Infrastructure Projects", href: "/projects" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31.jpg-MksGPo2JwPZ330qVTqHRGnyTa2sMPT.jpeg"
      />

      {/* Services Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Infrastructure Services</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Essential Infrastructure Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive infrastructure development services that ensure reliable, efficient, and safe
              operations for energy sector facilities.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Need Infrastructure Development?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our infrastructure specialists to discuss your power, control, and communication system
            requirements.
          </p>
          <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
            <Link href="/contact">
              Get Infrastructure Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
