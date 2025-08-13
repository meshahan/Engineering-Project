import { Navigation } from "@/components/navigation"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { StructuredData } from "@/components/structured-data"
import { generateBreadcrumbSchema, generateProjectSchema } from "@/lib/structured-data"
import { MapPin, DollarSign, Clock, CheckCircle, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trans-Regional Pipeline System | Major Pipeline Construction Project",
  description:
    "500-mile natural gas pipeline system connecting major distribution hubs across three states with advanced monitoring and control systems. $850M project completed in 36 months.",
  keywords: "trans-regional pipeline, natural gas pipeline, pipeline construction, transmission pipeline",
}

const projectStats = [
  { icon: MapPin, label: "Location", value: "Texas, Oklahoma, Louisiana" },
  { icon: DollarSign, label: "Project Value", value: "$850 Million" },
  { icon: Clock, label: "Duration", value: "36 Months" },
  { icon: Users, label: "Team Size", value: "450+ Personnel" },
]

const keyFeatures = [
  {
    title: "Advanced Pipeline Technology",
    description: "36-inch high-strength steel pipeline with advanced coating systems",
    icon: Zap,
  },
  {
    title: "Compression Stations",
    description: "5 state-of-the-art compression stations with remote monitoring",
    icon: Shield,
  },
  {
    title: "Environmental Compliance",
    description: "Zero environmental incidents with comprehensive restoration",
    icon: CheckCircle,
  },
  {
    title: "Safety Excellence",
    description: "2.5 million work hours with zero lost-time incidents",
    icon: Users,
  },
]

const projectPhases = [
  {
    phase: "Phase 1",
    title: "Route Survey & Permitting",
    duration: "8 months",
    description: "Comprehensive route analysis, environmental studies, and regulatory approvals",
    achievements: ["500+ miles surveyed", "All permits obtained", "Stakeholder agreements"],
  },
  {
    phase: "Phase 2",
    title: "Right-of-Way Preparation",
    duration: "12 months",
    description: "Land clearing, access road construction, and workspace preparation",
    achievements: ["1,200 acres cleared", "150 miles access roads", "Temporary facilities"],
  },
  {
    phase: "Phase 3",
    title: "Pipeline Construction",
    duration: "18 months",
    description: "Pipeline installation, welding, testing, and backfill operations",
    achievements: ["500 miles installed", "15,000+ welds", "100% X-ray inspection"],
  },
  {
    phase: "Phase 4",
    title: "Commissioning & Startup",
    duration: "6 months",
    description: "System testing, commissioning, and operational handover",
    achievements: ["Hydrostatic testing", "SCADA integration", "Operator training"],
  },
]

export default function TransRegionalPipelineProject() {
  // <CHANGE> Added structured data for breadcrumbs and project
  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://ogconstruction.com" },
      { name: "Projects", url: "https://ogconstruction.com/projects" },
      { name: "Trans-Regional Pipeline System", url: "https://ogconstruction.com/projects/trans-regional-pipeline" },
    ],
  }

  const projectData = {
    name: "Trans-Regional Pipeline System",
    description:
      "500-mile natural gas pipeline system connecting major distribution hubs across three states with advanced monitoring and control systems",
    startDate: "2021-01-15",
    endDate: "2024-01-15",
    location: "Texas, Oklahoma, Louisiana",
    value: "850000000",
    contractor: "Oil & Gas Construction Co.",
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* <CHANGE> Added structured data for breadcrumbs and project */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      <StructuredData data={generateProjectSchema(projectData)} />

      {/* ... existing code ... */}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-DMmU4z73ZA3WZYowMLqZQ1KicSDsSe.jpeg"
          alt="Trans-Regional Pipeline System"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 to-deep-navy/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-energy-orange text-white mb-4">Major Pipeline Project</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Trans-Regional Pipeline System</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              500-mile natural gas transmission pipeline connecting major distribution hubs across three states
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
                  Engineering Excellence in Pipeline Construction
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Trans-Regional Pipeline System represents one of the most significant natural gas infrastructure
                  projects in recent years, connecting major supply sources with growing demand centers across three
                  states.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">Project Scope</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>500 miles of 36-inch high-pressure transmission pipeline</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>5 compressor stations with 125,000 HP total capacity</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>12 meter stations and pressure regulation facilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-energy-orange mr-3 flex-shrink-0" />
                      <span>Advanced SCADA system with remote monitoring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">Key Challenges</h3>
                  <p className="text-muted-foreground">
                    The project required crossing multiple environmentally sensitive areas, navigating complex
                    regulatory requirements across three states, and maintaining operations\
