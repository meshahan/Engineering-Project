import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AnimatedSection, StaggeredContainer, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StructuredData } from "@/components/structured-data"
import { generateJobPostingSchema, type JobPostingData } from "@/lib/structured-data"
import { Users, Heart, GraduationCap, DollarSign, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | Join Our Oil & Gas Construction Team",
  description:
    "Explore career opportunities with a leading oil & gas construction company. Competitive benefits, professional development, and exciting projects await.",
  keywords: "oil gas construction careers, construction jobs, energy sector careers, engineering jobs",
}

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries with performance-based bonuses and profit sharing",
    icon: DollarSign,
  },
  {
    title: "Comprehensive Benefits",
    description: "Full health, dental, vision insurance plus retirement planning and life insurance",
    icon: Heart,
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities, certifications, and career advancement programs",
    icon: GraduationCap,
  },
  {
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and generous paid time off policies",
    icon: Users,
  },
]

const openPositions = [
  {
    title: "Senior Project Manager",
    department: "Project Management",
    location: "Houston, TX",
    type: "Full-time",
    experience: "8+ years",
    description:
      "Lead major pipeline and industrial construction projects from planning through completion. Manage project teams, budgets, and client relationships.",
    requirements: [
      "Bachelor's degree in Engineering or Construction Management",
      "8+ years project management experience in oil & gas",
      "PMP certification preferred",
      "Strong leadership and communication skills",
    ],
    salary: { min: 120000, max: 180000 },
  },
  {
    title: "Construction Superintendent",
    department: "Field Operations",
    location: "Multiple Locations",
    type: "Full-time",
    experience: "10+ years",
    description:
      "Oversee daily construction operations, ensure safety compliance, and manage field personnel on major construction projects.",
    requirements: [
      "10+ years construction supervision experience",
      "Oil & gas construction background required",
      "OSHA 30-hour certification",
      "Excellent safety record and leadership skills",
    ],
    salary: { min: 100000, max: 150000 },
  },
  {
    title: "Pipeline Engineer",
    department: "Engineering",
    location: "Dallas, TX",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Design and analyze pipeline systems, prepare technical specifications, and support construction activities.",
    requirements: [
      "Bachelor's degree in Mechanical or Civil Engineering",
      "5+ years pipeline engineering experience",
      "Professional Engineer license preferred",
      "Proficiency in pipeline design software",
    ],
    salary: { min: 90000, max: 130000 },
  },
  {
    title: "Safety Manager",
    department: "HSE",
    location: "Oklahoma City, OK",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Develop and implement safety programs, conduct training, and ensure regulatory compliance across all projects.",
    requirements: [
      "Bachelor's degree in Safety, Engineering, or related field",
      "7+ years safety management experience",
      "CSP or ASP certification preferred",
      "Strong knowledge of OSHA regulations",
    ],
    salary: { min: 85000, max: 125000 },
  },
]

export default function CareersPage() {
  const jobPostings: JobPostingData[] = openPositions.map((position) => ({
    title: position.title,
    description: position.description,
    datePosted: "2024-01-15",
    validThrough: "2024-12-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      name: "Oil & Gas Construction Co.",
      sameAs: "https://ogconstruction.com",
    },
    jobLocation: {
      streetAddress: "123 Industrial Blvd",
      addressLocality: position.location.includes("Houston") ? "Houston" : position.location.split(", ")[0],
      addressRegion: position.location.includes("TX") ? "TX" : position.location.split(", ")[1] || "TX",
      postalCode: "77001",
      addressCountry: "US",
    },
    baseSalary: {
      currency: "USD",
      value: {
        minValue: position.salary.min,
        maxValue: position.salary.max,
        unitText: "YEAR",
      },
    },
    qualifications: position.requirements,
    responsibilities: [position.description],
  }))

  return (
    <div className="min-h-screen">
      <Navigation />

      {jobPostings.map((job, index) => (
        <StructuredData key={index} data={generateJobPostingSchema(job)} />
      ))}

      <HeroSection
        subtitle="Join Our Team"
        title="Build Your Career With Us"
        description="Join a dynamic team of professionals dedicated to building tomorrow's energy infrastructure. Discover exciting career opportunities in a company that values safety, innovation, and excellence."
        primaryCta={{ text: "View Open Positions", href: "#open-positions" }}
        secondaryCta={{ text: "Learn About Benefits", href: "#benefits" }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30.jpg-MksGPo2JwPZ330qVTqHRGnyTa2sMPT.jpeg"
      />

      {/* Why Work With Us */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              A Great Place to Build Your Career
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to creating an environment where talented professionals can thrive, grow, and make a
              meaningful impact on critical energy infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StaggeredItem>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-deep-navy mb-2">450+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-deep-navy mb-2">25+</div>
                <div className="text-muted-foreground">Years in Business</div>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-deep-navy mb-2">95%</div>
                <div className="text-muted-foreground">Employee Retention</div>
              </div>
            </StaggeredItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection id="benefits" className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-petrol-blue text-white">Employee Benefits</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Comprehensive Benefits Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team members with competitive compensation and comprehensive benefits
              that support both professional and personal well-being.
            </p>
          </div>

          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={benefit.title}>
                <Card className="h-full border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-deep-navy mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection id="open-positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-energy-orange text-white">Current Openings</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our current job openings and find the perfect opportunity to advance your career in oil & gas
              construction.
            </p>
          </div>

          <StaggeredContainer className="space-y-8">
            {openPositions.map((position, index) => (
              <StaggeredItem key={position.title}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-deep-navy mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-energy-orange text-white self-start">{position.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{position.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-deep-navy mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-energy-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="bg-energy-orange hover:bg-energy-orange/90">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Don't see the perfect position? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4" asChild>
              <Link href="/contact">
                Submit Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 bg-transparent"
              asChild
            >
              <Link href="/about">Learn About Our Culture</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
