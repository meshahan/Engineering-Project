import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Shield, Cog, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pipeline Construction Services | Oil & Gas Infrastructure",
  description:
    "Expert pipeline construction services including cross-country transmission pipelines, distribution networks, compression stations, and metering facilities.",
  keywords:
    "pipeline construction, transmission pipelines, distribution networks, compression stations, oil gas pipelines",
}

const services = [
  {
    title: "Transmission Pipelines",
    description: "Large-diameter, high-pressure pipelines for long-distance transportation",
    features: [
      "Cross-country pipeline systems",
      "High-pressure transmission lines",
      "Interstate pipeline networks",
      "Export terminal connections",
    ],
  },
  {
    title: "Distribution Networks",
    description: "Local and regional distribution pipeline systems",
    features: ["City gate stations", "Distribution mains", "Service line installations", "Pressure regulation systems"],
  },
  {
    title: "Compression Stations",
    description: "Compressor facilities for pipeline pressure maintenance",
    features: [
      "Centrifugal compressor stations",
      "Reciprocating compressor units",
      "Electric and gas-driven systems",
      "Remote monitoring capabilities",
    ],
  },
  {
    title: "Metering & Regulation",
    description: "Precision measurement and pressure control facilities",
    features: [
      "Custody transfer metering",
      "Pressure regulation stations",
      "Flow measurement systems",
      "SCADA integration",
    ],
  },
]

const capabilities = [
  { icon: Zap, title: "Advanced Welding", description: "Certified welders using latest techniques and equipment" },
  { icon: Shield, title: "Safety Excellence", description: "Zero-incident safety record with comprehensive protocols" },
  { icon: Cog, title: "Quality Control", description: "Rigorous testing and inspection at every phase" },
  { icon: Truck, title: "Logistics Management", description: "Efficient material handling and equipment deployment" },
]

export default function PipelineServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="Pipeline Construction"
        title="Advanced Pipeline Infrastructure Solutions"
        description="Delivering world-class pipeline construction services from transmission systems to distribution networks with unmatched safety standards and technical expertise."
        primaryCta={{ text: "Request Quote", href: "/contact" }}
        secondaryCta={{ text: "View Pipeline Projects", href: "/projects" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-DMmU4z73ZA3WZYowMLqZQ1KicSDsSe.jpeg"
      />

      {/* Services Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Pipeline Services</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Complete Pipeline Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial route planning to final commissioning, we provide comprehensive pipeline construction
              services for all types of energy transportation systems.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggeredItem key={service.title}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
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

      {/* Capabilities */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Our Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">Technical Excellence</h2>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <StaggeredItem key={capability.title}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-energy-orange text-white">Construction Process</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
                  Proven Pipeline Construction Methodology
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our systematic approach ensures safe, efficient, and high-quality pipeline construction from planning
                  through commissioning.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Route Survey & Design",
                    description: "Comprehensive route analysis and engineering design",
                  },
                  { title: "Right-of-Way Preparation", description: "Land clearing and access road construction" },
                  { title: "Pipeline Installation", description: "Trenching, welding, and pipe installation" },
                  { title: "Testing & Commissioning", description: "Hydrostatic testing and system startup" },
                ].map((phase, index) => (
                  <div key={phase.title} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-energy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-deep-navy mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-hB68zNFQAueFtxpVFb18w8uwU2pBWD.jpeg"
                alt="Pipeline construction process"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-industrial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Start Your Pipeline Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our pipeline construction experts to discuss your project requirements and receive a detailed
            proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
              <Link href="/contact">
                Get Pipeline Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
