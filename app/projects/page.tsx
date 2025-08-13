import { Navigation } from "@/components/navigation"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectShowcase, type ShowcaseProject } from "@/components/project-showcase"
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

const plantImages = [
  { src: "/plant-images/h1.jpg", alt: "Industrial plant equipment - front view" },
  { src: "/plant-images/h1%20(3).jpg", alt: "Industrial plant equipment - alternate angle" },
  { src: "/plant-images/tanks.jpg", alt: "Row of large storage tanks" },
  { src: "/plant-images/conveyor.jpg", alt: "Industrial conveyor belt system" },
  { src: "/plant-images/cladding.jpg", alt: "Industrial cladding and structure" },
  { src: "/plant-images/spray.jpg", alt: "Industrial spray system and piping" },
  { src: "/plant-images/p1.png", alt: "Industrial plant machinery" },
  { src: "/plant-images/p3.jpg", alt: "Process equipment and piping" },
  { src: "/plant-images/p4.jpg", alt: "Industrial mixing or processing tank" },
  { src: "/plant-images/p5.jpg", alt: "Compressor and heat-exchanger assembly" },
  { src: "/plant-images/p6.jpg", alt: "Blue scrubber unit with piping" },
  { src: "/plant-images/p7.jpg", alt: "Metal stair access to storage tank" },
  { src: "/plant-images/16.png", alt: "Plant schematic or component" },
  { src: "/plant-images/21.jpeg", alt: "Industrial plant exterior - wide view" },
  { src: "/plant-images/22.jpeg", alt: "Industrial plant exterior - close view" },
  { src: "/plant-images/23.jpeg", alt: "Process area with vertical columns" },
  { src: "/plant-images/27.jpeg", alt: "Construction crane installing tank" },
  { src: "/plant-images/29.jpeg", alt: "Vertical tanks and pipe racks" },
  { src: "/plant-images/30.jpg", alt: "Large refinery complex with pipes" },
  { src: "/plant-images/31.jpg", alt: "Industrial tanks and structures" },
]

const sampleProjects: ShowcaseProject[] = [
  ...[
    {
      category: "Storage",
      title: "Storage Terminal Complex",
      description: "Large-scale storage facility with multiple tank configurations and loading systems.",
      image: "/plant-images/h1.jpg",
      meta: { location: "Oklahoma, USA", completed: "2024", value: "$450M", duration: "24 months" },
      scope: ["Multiple storage tank configurations", "Automated loading systems", "Fire suppression systems", "Environmental containment"],
      challenges: ["Foundation requirements", "Environmental compliance", "Logistics coordination", "Quality control standards"],
    },
    {
      category: "Processing",
      title: "Compressor & Heat-Exchanger Assembly",
      description: "Integrated compressor skid with heat-exchanger package for process optimization.",
      image: "/plant-images/p5.jpg",
      meta: { location: "Texas, USA", completed: "2023", value: "$38M", duration: "10 months" },
      scope: ["Compressor skid fabrication", "Heat-exchanger installation", "Instrumentation & controls", "Commissioning"],
      challenges: ["Tight layout clearances", "Vibration control", "Thermal performance targets", "Schedule constraints"],
    },
    {
      category: "Scrubbing",
      title: "DL-20 Scrubber Installation",
      description: "Blue scrubber unit with upgraded piping network and safety systems.",
      image: "/plant-images/p6.jpg",
      meta: { location: "Louisiana, USA", completed: "2022", value: "$12M", duration: "6 months" },
      scope: ["Scrubber foundation & setting", "Piping tie-ins", "Safety interlocks", "Performance testing"],
      challenges: ["Corrosion control", "Confined tie-in windows", "Process uptime requirements", "QA/QC documentation"],
    },
    {
      category: "Conveying",
      title: "Bulk Handling Conveyor",
      description: "Heavy-duty conveyor system for bulk solids handling at plant headworks.",
      image: "/plant-images/conveyor.jpg",
      meta: { location: "New Mexico, USA", completed: "2024", value: "$7M", duration: "4 months" },
      scope: ["Conveyor structure", "Drive & idler assemblies", "Chute work", "Dust mitigation"],
      challenges: ["Alignment tolerances", "Weather impacts", "Material spillage control", "Commissioning windows"],
    },
    {
      category: "Storage",
      title: "Vertical Tank Farm",
      description: "Row of large vertical storage tanks for intermediate product holding.",
      image: "/plant-images/tanks.jpg",
      meta: { location: "Kansas, USA", completed: "2023", value: "$62M", duration: "14 months" },
      scope: ["Tank fabrication & erection", "Hydrostatic testing", "Cathodic protection", "Insulation & painting"],
      challenges: ["Weld QA/QC", "Schedule overlaps", "Crane access", "Safety around simultaneous ops"],
    },
    {
      category: "Process",
      title: "Piping Gallery Upgrade",
      description: "Complex piping and valve network modernization for higher throughput.",
      image: "/plant-images/p3.jpg",
      meta: { location: "Oklahoma, USA", completed: "2022", value: "$25M", duration: "9 months" },
      scope: ["New manifolds", "Valve automation", "Heat tracing", "Pressure testing"],
      challenges: ["Hot work in active unit", "Tie-in sequencing", "As-built accuracy", "Inspection hold points"],
    },
    {
      category: "Process",
      title: "Mixing Tank Installation",
      description: "High-grade stainless mixing tank with sanitary piping and controls.",
      image: "/plant-images/p4.jpg",
      meta: { location: "Arizona, USA", completed: "2024", value: "$9M", duration: "5 months" },
      scope: ["Tank setting", "Agitator alignment", "Sanitary piping", "CIP integration"],
      challenges: ["Hygienic standards", "Finish quality", "Operator access", "Utilities routing"],
    },
    {
      category: "Refinery",
      title: "Refinery Unit Expansion",
      description: "Large refinery complex expansion with new process trains and pipe racks.",
      image: "/plant-images/30.jpg",
      meta: { location: "Wyoming, USA", completed: "2021", value: "$320M", duration: "28 months" },
      scope: ["Steel superstructure", "Pipe racks", "Equipment setting", "Electrical & controls"],
      challenges: ["Congested workfronts", "Heavy lifts", "Interface management", "Permitting timelines"],
    },
    {
      category: "Construction",
      title: "Tank Lift & Placement",
      description: "Crane heavy-lift operation placing tanks within a multi-storey frame.",
      image: "/plant-images/27.jpeg",
      meta: { location: "Utah, USA", completed: "2023", value: "$15M", duration: "6 months" },
      scope: ["Lift planning", "Rigging", "Setting & alignment", "Anchor bolt checks"],
      challenges: ["Wind limits", "Tight site", "Coordination with trades", "Public safety"],
    },
    {
      category: "Process",
      title: "Blue Piping Module",
      description: "Packaged process module with pumps, exchangers and control valves.",
      image: "/plant-images/21.jpeg",
      meta: { location: "Colorado, USA", completed: "2022", value: "$18M", duration: "7 months" },
      scope: ["Module fabrication", "Factory acceptance test", "Transport & set", "Startup support"],
      challenges: ["Transport envelope", "Interconnects", "Instrument calibration", "Commissioning windows"],
    },
    {
      category: "Storage",
      title: "Composite Tank Battery",
      description: "Series of composite tanks and support structures for liquids storage.",
      image: "/plant-images/31.jpg",
      meta: { location: "Nevada, USA", completed: "2024", value: "$22M", duration: "8 months" },
      scope: ["Foundations", "Tank setting", "Overflow & venting", "Painting"],
      challenges: ["Thermal expansion", "Access platforms", "QA documentation", "Weather delays"],
    },
  ].slice(0, 10),
]

export default function Page() {
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

      {/* Ten Project Showcase (single visible, auto-advance) */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-energy-orange text-white">Latest Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-2">Project Showcase</h2>
            <p className="text-xl text-muted-foreground">Ten featured projects; only one is visible at a time and auto-advances.</p>
          </div>
          <ProjectShowcase projects={sampleProjects} autoplayMs={6000} />
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
                    regulatory requirements across three states, and maintaining operations throughout the construction process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Plant Images Carousel */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-energy-orange text-white">Project Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Construction & Plant Images
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore detailed images of our industrial construction projects, showcasing the scale and complexity of our work.
            </p>
          </div>
          
          <ProjectGallery images={plantImages.map((i) => ({
            ...i,
            title: i.alt,
            details: {
              category: "Storage",
              location: "Oklahoma, USA",
              completed: "2024",
              value: "$450M",
              duration: "24 months",
              sections: [
                {
                  heading: "Project Details",
                  bullets: [
                    "Multiple storage tank configurations",
                    "Automated loading systems",
                    "Fire suppression systems",
                    "Environmental containment",
                  ],
                },
                {
                  heading: "Key Challenges",
                  bullets: [
                    "Foundation requirements",
                    "Environmental compliance",
                    "Logistics coordination",
                    "Quality control standards",
                  ],
                },
                {
                  heading: "Our Solutions",
                  bullets: [
                    "Advanced foundation design",
                    "Environmental monitoring systems",
                    "Streamlined logistics planning",
                    "Rigorous quality assurance",
                  ],
                },
              ],
            },
          }))} />
        </div>
      </AnimatedSection>
    </div>
  )
}
