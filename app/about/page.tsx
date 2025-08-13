import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Leading Oil & Gas Construction Company",
  description:
    "Learn about our 25+ years of experience in oil & gas construction, our mission to deliver world-class infrastructure projects, and our commitment to safety and excellence.",
  keywords: "about oil gas construction, company history, construction expertise, energy infrastructure",
}

const values = [
  {
    title: "Safety First",
    description: "Uncompromising commitment to safety in every aspect of our operations",
    icon: Award,
  },
  {
    title: "Quality Excellence",
    description: "Delivering superior quality through rigorous standards and continuous improvement",
    icon: Target,
  },
  {
    title: "Innovation",
    description: "Embracing cutting-edge technology and innovative construction methodologies",
    icon: Globe,
  },
  {
    title: "Teamwork",
    description: "Fostering collaboration and partnership with clients, suppliers, and communities",
    icon: Users,
  },
]

const leadership = [
  {
    name: "John Mitchell",
    position: "Chief Executive Officer",
    experience: "30+ years in energy construction",
    description: "Leading strategic vision and operational excellence across all business units",
  },
  {
    name: "Sarah Rodriguez",
    position: "Chief Operating Officer",
    experience: "25+ years in project management",
    description: "Overseeing project delivery and operational efficiency initiatives",
  },
  {
    name: "Michael Chen",
    position: "Chief Safety Officer",
    experience: "20+ years in HSE management",
    description: "Ensuring industry-leading safety standards and regulatory compliance",
  },
  {
    name: "Lisa Thompson",
    position: "Chief Technology Officer",
    experience: "18+ years in engineering",
    description: "Driving innovation and technology advancement in construction processes",
  },
]

const milestones = [
  { year: "1999", title: "Company Founded", description: "Established with focus on pipeline construction" },
  { year: "2005", title: "Major Expansion", description: "Expanded into industrial facility construction" },
  { year: "2010", title: "International Growth", description: "First international project completed" },
  { year: "2015", title: "Technology Leadership", description: "Implemented advanced digital construction tools" },
  { year: "2020", title: "Sustainability Focus", description: "Launched comprehensive sustainability program" },
  { year: "2024", title: "Industry Recognition", description: "Awarded Constructor of the Year" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="About Our Company"
        title="Building Tomorrow's Energy Infrastructure"
        description="For over 25 years, we've been at the forefront of oil & gas construction, delivering world-class infrastructure projects that power communities and drive economic growth."
        primaryCta={{ text: "View Our Projects", href: "/projects" }}
        secondaryCta={{ text: "Join Our Team", href: "/careers" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31.jpg-MksGPo2JwPZ330qVTqHRGnyTa2sMPT.jpeg"
      />

      {/* Company Story */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-energy-orange text-white">Our Story</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
                  25 Years of Construction Excellence
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Founded in 1999, our company has grown from a regional pipeline contractor to a leading oil & gas
                  construction firm, completing over 500 projects across North America.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver world-class energy infrastructure projects that exceed client expectations while
                    maintaining the highest standards of safety, quality, and environmental stewardship.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted and innovative construction partner in the energy sector, setting industry
                    standards for safety, sustainability, and project excellence.
                  </p>
                </div>
              </div>

              <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90" asChild>
                <Link href="/projects">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-hB68zNFQAueFtxpVFb18w8uwU2pBWD.jpeg"
                alt="Construction excellence"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-80"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-sand rounded-lg">
                  <AnimatedCounter value="500+" className="text-3xl font-serif font-bold text-deep-navy" />
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-sand rounded-lg">
                  <AnimatedCounter value="$15B+" className="text-3xl font-serif font-bold text-deep-navy" />
                  <div className="text-sm text-muted-foreground">Total Project Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">Principles That Guide Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every project we undertake, ensuring consistent
              excellence in all our endeavors.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggeredItem key={value.title}>
                <Card className="h-full border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-navy mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Experienced Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in energy construction, safety management, and
              operational excellence.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <StaggeredItem key={leader.name}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-deep-navy">{leader.name}</h3>
                        <p className="text-energy-orange font-semibold">{leader.position}</p>
                        <p className="text-sm text-muted-foreground">{leader.experience}</p>
                      </div>
                      <p className="text-muted-foreground">{leader.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Company Timeline */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">Company Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-energy-orange"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <StaggeredItem key={milestone.year}>
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}>
                    <div className="w-1/2 px-8">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <div className="text-2xl font-serif font-bold text-energy-orange mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-energy-orange rounded-full border-4 border-white"></div>
                    <div className="w-1/2"></div>
                  </div>
                </StaggeredItem>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
