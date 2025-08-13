import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, CheckCircle, FileText, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { AnimatedCounter } from "@/components/animated-counter"

export const metadata: Metadata = {
  title: "HSE & Quality Management | Safety Excellence in Construction",
  description:
    "Our comprehensive Health, Safety, Environment & Quality management systems ensure 99.8% safety record and ISO certifications across all oil & gas construction projects.",
  keywords: "HSE management, safety excellence, quality assurance, ISO certification, construction safety",
}

const safetyStats = [
  { number: "99.8%", label: "Safety Record", icon: Shield },
  { number: "0", label: "Lost Time Incidents (2024)", icon: CheckCircle },
  { number: "2.5M+", label: "Safe Work Hours", icon: Users },
  { number: "100%", label: "Project Compliance", icon: Award },
]

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    category: "Quality",
  },
  {
    title: "ISO 14001:2015",
    description: "Environmental Management Systems",
    category: "Environment",
  },
  {
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety",
    category: "Safety",
  },
  {
    title: "API Q1 & Q2",
    description: "American Petroleum Institute Quality",
    category: "Industry",
  },
]

const safetyPrograms = [
  {
    title: "Behavior-Based Safety",
    description: "Comprehensive safety culture program focusing on proactive hazard identification",
    icon: Users,
    features: ["Daily safety meetings", "Hazard reporting systems", "Safety leadership training", "Incident analysis"],
  },
  {
    title: "Risk Management",
    description: "Systematic risk assessment and mitigation across all project phases",
    icon: Shield,
    features: ["Job safety analysis", "Risk registers", "Mitigation planning", "Continuous monitoring"],
  },
  {
    title: "Emergency Response",
    description: "Comprehensive emergency preparedness and response capabilities",
    icon: Zap,
    features: ["Emergency response plans", "Crisis management teams", "Regular drills", "24/7 response capability"],
  },
  {
    title: "Training & Development",
    description: "Continuous safety and quality training programs for all personnel",
    icon: FileText,
    features: ["Safety orientation", "Skills certification", "Refresher training", "Leadership development"],
  },
]

export default function HSEQualityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="HSE & Quality Excellence"
        title="Safety is Our Foundation"
        description="Our unwavering commitment to Health, Safety, Environment, and Quality excellence ensures every project is completed safely, sustainably, and to the highest standards."
        primaryCta={{ text: "View Safety Record", href: "#safety-stats" }}
        secondaryCta={{ text: "Our Capabilities", href: "?intro=1" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EiovNm5zMZlCPvGueyCP18xUTIvVvG.jpeg"
      />

      {/* Safety Statistics */}
      <AnimatedSection id="safety-stats" className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Safety Performance</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Industry-Leading Safety Record
            </h2>
          </div>

          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
              <StaggeredItem key={stat.label}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <AnimatedCounter
                    value={stat.number}
                    className="text-3xl md:text-4xl font-serif font-bold text-deep-navy mb-2"
                  />
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Safety Programs */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Safety Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Comprehensive Safety Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated safety management system encompasses behavior-based safety, risk management, emergency
              response, and continuous training programs.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyPrograms.map((program, index) => (
              <StaggeredItem key={program.title}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mb-6">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">{program.title}</h3>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
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

      {/* Certifications */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Certifications</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Industry Certifications & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence is validated through internationally recognized certifications and industry
              standards compliance.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <StaggeredItem key={cert.title}>
                <Card className="h-full border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="mb-4 bg-petrol-blue text-white">{cert.category}</Badge>
                    <h3 className="text-xl font-serif font-bold text-deep-navy mb-4">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Quality Management */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-energy-orange text-white">Quality Excellence</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
                  Rigorous Quality Assurance
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our quality management system ensures every project meets or exceeds client specifications and
                  industry standards through systematic quality control processes.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Quality Planning",
                    description: "Comprehensive quality plans developed for each project phase",
                  },
                  {
                    title: "Inspection & Testing",
                    description: "Rigorous inspection protocols and third-party testing verification",
                  },
                  {
                    title: "Documentation",
                    description: "Complete documentation and traceability throughout project lifecycle",
                  },
                  {
                    title: "Continuous Improvement",
                    description: "Regular audits and process improvements based on lessons learned",
                  },
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

            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-dIlO6E9RcSoFxxo96P4Inx9RqeAL1v.jpeg"
                alt="Quality management in construction"
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Partner with Safety Leaders</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience the confidence that comes with working with an industry leader in safety and quality management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
              <Link href="/contact">
                Request Safety Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="/projects">View Safe Projects</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
