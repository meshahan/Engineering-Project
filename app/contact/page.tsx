"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection, StaggeredItem } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const offices = [
  {
    name: "Houston Headquarters",
    address: "123 Industrial Blvd, Houston, TX 77001",
    phone: "+1 (555) 123-4567",
    email: "houston@ogconstruction.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
  {
    name: "Dallas Office",
    address: "456 Energy Plaza, Dallas, TX 75201",
    phone: "+1 (555) 234-5678",
    email: "dallas@ogconstruction.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
  {
    name: "Oklahoma City Office",
    address: "789 Pipeline Ave, Oklahoma City, OK 73102",
    phone: "+1 (555) 345-6789",
    email: "okc@ogconstruction.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 24 hours.",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-energy-orange text-white">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Contact Our Experts</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to discuss your next oil & gas construction project? Our experienced team is here to help you bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-energy-orange text-white">Project Inquiry</Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-navy mb-4">
                  Start Your Project Today
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your project
                  requirements.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select onValueChange={(value) => handleChange("projectType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pipeline">Pipeline Construction</SelectItem>
                      <SelectItem value="industrial">Industrial Facilities</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure Development</SelectItem>
                      <SelectItem value="maintenance">Maintenance Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={6}
                    className="mt-2"
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-energy-orange hover:bg-energy-orange/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-petrol-blue text-white">Contact Information</Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-navy mb-4">Our Offices</h2>
                <p className="text-xl text-muted-foreground">
                  With offices across the region, we're always close to your project location.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <StaggeredItem key={office.name}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <h3 className="text-xl font-serif font-bold text-deep-navy">{office.name}</h3>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-energy-orange mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-energy-orange flex-shrink-0" />
                          <span className="text-muted-foreground">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-energy-orange flex-shrink-0" />
                          <span className="text-muted-foreground">{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-energy-orange flex-shrink-0" />
                          <span className="text-muted-foreground">{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="border-0 shadow-lg bg-energy-orange text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3">24/7 Emergency Response</h3>
                  <p className="mb-4">For urgent project issues or emergency situations:</p>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 flex-shrink-0" />
                    <span className="font-semibold">+1 (555) 911-HELP</span>
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
