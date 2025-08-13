"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CompactProjectGallery } from "@/components/ui/compact-project-gallery"
import { Building2, Factory, Zap, Wrench } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Trans-Regional Pipeline System",
    description:
      "500-mile natural gas pipeline system connecting major distribution hubs across three states with advanced monitoring and control systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-DMmU4z73ZA3WZYowMLqZQ1KicSDsSe.jpeg",
    category: "Pipeline",
    location: "Texas, USA",
    completionDate: "2024",
    href: "/projects/trans-regional-pipeline",
    value: "$850M",
    duration: "36 months",
  },
  {
    title: "Industrial Processing Complex",
    description:
      "State-of-the-art petrochemical processing facility with integrated storage and distribution capabilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EiovNm5zMZlCPvGueyCP18xUTIvVvG.jpeg",
    category: "Industrial",
    location: "Louisiana, USA",
    completionDate: "2023",
    href: "/projects/processing-complex",
    value: "$1.2B",
    duration: "48 months",
  },
  {
    title: "Storage Terminal Expansion",
    description: "Major expansion of crude oil storage terminal including new tank farms and loading facilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-1miaflviD2mpw4kiTroOzScAYRSLzJ.jpeg",
    category: "Storage",
    location: "Oklahoma, USA",
    completionDate: "2024",
    href: "/projects/storage-expansion",
    value: "$450M",
    duration: "24 months",
  },
  {
    title: "Gas Compression Station",
    description: "High-capacity natural gas compression facility with redundant systems and remote monitoring.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-hB68zNFQAueFtxpVFb18w8uwU2pBWD.jpeg",
    category: "Infrastructure",
    location: "Colorado, USA",
    completionDate: "2023",
    href: "/projects/compression-station",
    value: "$320M",
    duration: "18 months",
  },
  {
    title: "Refinery Modernization",
    description:
      "Complete modernization of existing refinery including new processing units and environmental systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-dIlO6E9RcSoFxxo96P4Inx9RqeAL1v.jpeg",
    category: "Industrial",
    location: "California, USA",
    completionDate: "2022",
    href: "/projects/refinery-modernization",
    value: "$2.1B",
    duration: "60 months",
  },
  {
    title: "Offshore Platform Construction",
    description: "Complete offshore drilling platform construction and installation in Gulf of Mexico.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30.jpg-MksGPo2JwPZ330qVTqHRGnyTa2sMPT.jpeg",
    category: "Infrastructure",
    location: "Gulf of Mexico",
    completionDate: "2023",
    href: "/projects/offshore-platform",
    value: "$680M",
    duration: "30 months",
  },
]

const categories = [
  { name: "All Projects", value: "all", icon: Building2 },
  { name: "Pipeline", value: "Pipeline", icon: Building2 },
  { name: "Industrial", value: "Industrial", icon: Factory },
  { name: "Infrastructure", value: "Infrastructure", icon: Zap },
  { name: "Storage", value: "Storage", icon: Wrench },
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "$15B+", label: "Total Project Value" },
  { number: "25+", label: "Years Experience" },
  { number: "99.8%", label: "On-Time Delivery" },
]

const galleryProjects = [
  {
    id: "industrial-facility",
    title: "Industrial Processing Facility",
    description: "Advanced petrochemical processing facility with integrated control systems and safety protocols.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-DMmU4z73ZA3WZYowMLqZQ1KicSDsSe.jpeg",
    category: "Industrial",
    location: "Texas, USA",
    completionDate: "2024",
    value: "$850M",
    duration: "36 months",
    details: [
      "Advanced process control systems",
      "Integrated safety shutdown systems",
      "Environmental monitoring equipment",
      "High-efficiency heat exchangers",
    ],
    challenges: [
      "Complex piping integration",
      "Strict environmental regulations",
      "Tight construction timeline",
      "Coordination with existing operations",
    ],
    solutions: [
      "3D modeling and clash detection",
      "Phased construction approach",
      "Advanced project management tools",
      "Continuous stakeholder communication",
    ],
  },
  {
    id: "processing-complex",
    title: "Petrochemical Processing Complex",
    description: "State-of-the-art processing facility with multiple production units and storage systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EiovNm5zMZlCPvGueyCP18xUTIvVvG.jpeg",
    category: "Industrial",
    location: "Louisiana, USA",
    completionDate: "2023",
    value: "$1.2B",
    duration: "48 months",
    details: [
      "Multiple processing units",
      "Integrated storage systems",
      "Advanced control room",
      "Emergency response systems",
    ],
    challenges: [
      "Large-scale coordination",
      "Weather-related delays",
      "Complex utility integration",
      "Safety protocol implementation",
    ],
    solutions: [
      "Modular construction approach",
      "Weather contingency planning",
      "Integrated utility design",
      "Comprehensive safety training",
    ],
  },
  {
    id: "storage-terminal",
    title: "Storage Terminal Complex",
    description: "Large-scale storage facility with multiple tank configurations and loading systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-1miaflviD2mpw4kiTroOzScAYRSLzJ.jpeg",
    category: "Storage",
    location: "Oklahoma, USA",
    completionDate: "2024",
    value: "$450M",
    duration: "24 months",
    details: [
      "Multiple storage tank configurations",
      "Automated loading systems",
      "Fire suppression systems",
      "Environmental containment",
    ],
    challenges: [
      "Foundation requirements",
      "Environmental compliance",
      "Logistics coordination",
      "Quality control standards",
    ],
    solutions: [
      "Advanced foundation design",
      "Environmental monitoring systems",
      "Streamlined logistics planning",
      "Rigorous quality assurance",
    ],
  },
  {
    id: "compression-station",
    title: "Gas Compression Station",
    description: "High-capacity natural gas compression facility with redundant systems and monitoring.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-hB68zNFQAueFtxpVFb18w8uwU2pBWD.jpeg",
    category: "Infrastructure",
    location: "Colorado, USA",
    completionDate: "2023",
    value: "$320M",
    duration: "18 months",
    details: [
      "High-capacity compression units",
      "Redundant safety systems",
      "Remote monitoring capabilities",
      "Maintenance access platforms",
    ],
    challenges: [
      "High-pressure system integration",
      "Remote location logistics",
      "Weather conditions",
      "Equipment transportation",
    ],
    solutions: [
      "Specialized installation techniques",
      "Mobile construction facilities",
      "Weather-resistant construction",
      "Heavy-lift transportation planning",
    ],
  },
  {
    id: "storage-tanks",
    title: "Industrial Storage Tanks",
    description: "Large-scale cylindrical storage tanks with advanced monitoring and safety systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-dIlO6E9RcSoFxxo96P4Inx9RqeAL1v.jpeg",
    category: "Storage",
    location: "California, USA",
    completionDate: "2022",
    value: "$280M",
    duration: "20 months",
    details: [
      "Large-capacity storage vessels",
      "Advanced leak detection",
      "Automated inventory systems",
      "Secondary containment",
    ],
    challenges: [
      "Seismic design requirements",
      "Environmental regulations",
      "Construction sequencing",
      "Quality welding standards",
    ],
    solutions: [
      "Seismic-resistant design",
      "Environmental compliance systems",
      "Optimized construction sequence",
      "Certified welding procedures",
    ],
  },
  {
    id: "construction-project",
    title: "Industrial Construction Project",
    description: "Multi-phase construction project with concrete structures and equipment installation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31.jpg-IZsN5eKhQzHNs4NENSShi5imqWfrOG.jpeg",
    category: "Infrastructure",
    location: "Gulf Coast, USA",
    completionDate: "2023",
    value: "$680M",
    duration: "30 months",
    details: [
      "Reinforced concrete structures",
      "Heavy equipment installation",
      "Utility integration",
      "Access road construction",
    ],
    challenges: ["Foundation complexity", "Equipment coordination", "Weather exposure", "Site access limitations"],
    solutions: [
      "Advanced foundation engineering",
      "Coordinated equipment delivery",
      "Weather protection systems",
      "Temporary access solutions",
    ],
  },
]

export default function ProjectsClientPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection
        subtitle="Our Portfolio"
        title="Proven Project Excellence"
        description="Explore our comprehensive portfolio of successfully completed oil & gas construction projects, showcasing our expertise across pipeline infrastructure, industrial facilities, and energy systems."
        primaryCta={{ text: "Start Your Project", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31.jpg-IZsN5eKhQzHNs4NENSShi5imqWfrOG.jpeg"
      />

      {/* Stats Section */}
      <AnimatedSection className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggeredItem key={stat.label} className="text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-deep-navy">{stat.number}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Construction Gallery Carousel Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompactProjectGallery
            projects={galleryProjects}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Project Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Featured Construction Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest completed projects that demonstrate our commitment to excellence, innovation, and
              safety in oil & gas construction.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                className={`${
                  activeCategory === category.value
                    ? "bg-energy-orange hover:bg-energy-orange/90"
                    : "border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <StaggeredItem key={project.title}>
                <ProjectCard {...project} index={index} />
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Capabilities Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Project Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Comprehensive Project Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering & Design",
                description: "Complete engineering services from conceptual design through detailed engineering",
                features: ["Process design", "Structural engineering", "Instrumentation design", "3D modeling"],
              },
              {
                title: "Construction Management",
                description: "Full construction management and execution services",
                features: ["Project management", "Quality control", "Safety management", "Schedule optimization"],
              },
              {
                title: "Commissioning & Startup",
                description: "Comprehensive commissioning and startup services",
                features: ["System testing", "Performance validation", "Operator training", "Documentation"],
              },
            ].map((capability, index) => (
              <StaggeredItem key={capability.title}>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">{capability.title}</h3>
                    <p className="text-muted-foreground mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-energy-orange rounded-full mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
