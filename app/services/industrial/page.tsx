import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Factory, Fuel, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Facilities Construction | Oil & Gas Processing Plants",
  description:
    "Expert industrial facility construction including processing plants, storage terminals, refineries, and petrochemical facilities with advanced safety and quality standards.",
  keywords:
    "industrial facilities construction, processing plants, storage terminals, refineries, petrochemical facilities",
}

const facilities = [
  {
    title: "Processing Plants",
    description: "Advanced processing facilities for oil, gas, and petrochemical operations",
    icon: Factory,
    features: ["Gas processing plants", "Oil treatment facilities", "Fractionation units", "Sweetening systems"],
  },
  {
    title: "Storage Terminals",
    description: "Large-scale storage and distribution terminal facilities",
    icon: Fuel,
    features: [
      "Tank farm construction",
      "Loading/unloading systems",
      "Vapor recovery units",
      "Fire protection systems",
    ],
  },
  {
    title: "Refineries",
    description: "Complex refinery construction and modernization projects",
    icon: Zap,
    features: ["Distillation units", "Cracking facilities", "Hydrotreating units", "Utility systems"],
  },
  {
    title: "Petrochemical Facilities",
    description: "Specialized petrochemical and chemical processing plants",
    icon: Shield,
    features: ["Chemical reactors", "Separation systems", "Catalyst handling", "Environmental controls"],
  },
]

export default function IndustrialServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="Industrial Facilities"
        title="Complex Industrial Construction Solutions"
        description="Building state-of-the-art industrial facilities including processing plants, storage terminals, and petrochemical complexes with precision engineering and safety excellence."
        primaryCta={{ text: "Request Quote", href: "/contact" }}
        secondaryCta={{ text: "View Industrial Projects", href: "/projects" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-1miaflviD2mpw4kiTroOzScAYRSLzJ.jpeg"
      />

      {/* Facilities Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Industrial Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Advanced Industrial Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in constructing complex industrial facilities that meet the highest standards for safety,
              efficiency, and environmental compliance.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <StaggeredItem key={facility.title}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mb-6">
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">{facility.title}</h3>
                    <p className="text-muted-foreground mb-6">{facility.description}</p>
                    <ul className="space-y-3">
                      {facility.features.map((feature, idx) => (
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

      {/* Project Showcase */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-dIlO6E9RcSoFxxo96P4Inx9RqeAL1v.jpeg"
                alt="Industrial storage tanks"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-petrol-blue text-white">Our Expertise</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
                  Precision Engineering & Construction
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our industrial construction expertise spans decades of successful project delivery, combining advanced
                  engineering with proven construction methodologies.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Design Integration",
                    description: "Seamless integration of process design with construction execution",
                  },
                  {
                    title: "Safety Excellence",
                    description: "Industry-leading safety protocols for hazardous environments",
                  },
                  { title: "Quality Assurance", description: "Rigorous quality control and testing procedures" },
                  { title: "Schedule Management", description: "On-time delivery through advanced project management" },
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-energy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-deep-navy mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-industrial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Build Your Industrial Facility?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our industrial construction specialists to discuss your facility requirements and project timeline.
          </p>
          <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
