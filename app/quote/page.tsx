import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { StructuredData } from "@/components/structured-data"
import { generateWebPageSchema } from "@/lib/structured-data"
import { 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign, 
  FileText, 
  Phone, 
  Mail, 
  Send,
  CheckCircle,
  Shield,
  Clock,
  Users
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Quote | Oil & Gas Construction Services",
  description: "Request a free quote for your oil & gas construction project. Professional pipeline, industrial, and infrastructure construction services.",
  keywords: "construction quote, oil gas construction, pipeline construction quote, industrial construction",
}

const serviceTypes = [
  { value: "pipeline", label: "Pipeline Construction" },
  { value: "industrial", label: "Industrial Facilities" },
  { value: "infrastructure", label: "Infrastructure Development" },
  { value: "maintenance", label: "Maintenance & Repair" },
  { value: "consulting", label: "Engineering Consulting" },
  { value: "other", label: "Other Services" },
]

const projectSizes = [
  { value: "small", label: "Small (< $1M)" },
  { value: "medium", label: "Medium ($1M - $10M)" },
  { value: "large", label: "Large ($10M - $50M)" },
  { value: "enterprise", label: "Enterprise (> $50M)" },
]

const timelineOptions = [
  { value: "immediate", label: "Immediate (0-3 months)" },
  { value: "short", label: "Short-term (3-6 months)" },
  { value: "medium", label: "Medium-term (6-12 months)" },
  { value: "long", label: "Long-term (12+ months)" },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "No-cost initial consultation and project assessment"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured construction services"
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "24-48 hour response time for all quote requests"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with industry certifications"
  }
]

export default function QuotePage() {
  const pageData = {
    name: "Get a Quote - Oil & Gas Construction Services",
    description: "Request a free quote for your oil & gas construction project. Professional pipeline, industrial, and infrastructure construction services.",
    url: "https://ogconstruction.com/quote"
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <StructuredData data={generateWebPageSchema(pageData)} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-industrial">
        <div className="absolute inset-0 bg-deep-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-energy-orange text-white mb-6">Free Quote</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Get Your Project Quote
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Request a comprehensive quote for your oil & gas construction project. 
            Our experts will provide detailed estimates and project planning.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-industrial rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-deep-navy mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Form Section */}
      <AnimatedSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-deep-navy">
                    Project Quote Request
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24-48 hours with a detailed quote.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-deep-navy mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john.doe@company.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" placeholder="Your Company Inc." required />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-deep-navy mb-4 flex items-center">
                      <Building2 className="h-5 w-5 mr-2" />
                      Project Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="projectSize">Project Size *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project size" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectSizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Project Timeline *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelineOptions.map((timeline) => (
                              <SelectItem key={timeline.value} value={timeline.value}>
                                {timeline.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Project Location *</Label>
                        <Input id="location" placeholder="City, State" required />
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please provide a detailed description of your project, including scope, requirements, and any specific challenges or considerations..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-deep-navy mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Additional Requirements
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="engineering" />
                        <Label htmlFor="engineering">Engineering & Design Services</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="permitting" />
                        <Label htmlFor="permitting">Permitting & Regulatory Compliance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="environmental" />
                        <Label htmlFor="environmental">Environmental Assessment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="safety" />
                        <Label htmlFor="safety">Safety & HSE Management</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="quality" />
                        <Label htmlFor="quality">Quality Control & Assurance</Label>
                      </div>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-deep-navy mb-4 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Budget & Timeline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Input id="budget" placeholder="e.g., $1M - $5M" />
                      </div>
                      <div>
                        <Label htmlFor="startDate">Preferred Start Date</Label>
                        <Input id="startDate" type="date" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="additional">Additional Information</Label>
                    <Textarea 
                      id="additional" 
                      placeholder="Any additional information, special requirements, or questions you'd like us to address..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full bg-energy-orange hover:bg-energy-orange/90 text-white py-3 text-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Quote Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif font-bold text-deep-navy">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-energy-orange" />
                    <div>
                      <p className="font-medium text-deep-navy">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-energy-orange" />
                    <div>
                      <p className="font-medium text-deep-navy">Email</p>
                      <p className="text-muted-foreground">quotes@ogconstruction.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-energy-orange" />
              <div>
                      <p className="font-medium text-deep-navy">Office</p>
                      <p className="text-muted-foreground">Houston, TX</p>
              </div>
                        </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-energy-orange" />
                        <div>
                      <p className="font-medium text-deep-navy">Response Time</p>
                      <p className="text-muted-foreground">24-48 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif font-bold text-deep-navy">
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Initial consultation within 24-48 hours
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Detailed project assessment and scope review
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Comprehensive quote with timeline and deliverables
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Follow-up meeting to discuss project details
                    </p>
              </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
