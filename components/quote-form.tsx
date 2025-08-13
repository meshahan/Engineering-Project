"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Send, Calculator } from "lucide-react"

export function QuoteForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    location: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Quote Request Submitted!",
        description: "Our team will prepare your detailed quote within 48 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        projectScope: "",
        timeline: "",
        budget: "",
        location: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
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
    <Card className="border-0 shadow-lg">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <Badge className="mb-2 bg-energy-orange text-white w-fit mx-auto">Free Quote</Badge>
        <CardTitle className="text-2xl font-serif font-bold text-deep-navy">Get Your Project Quote</CardTitle>
        <p className="text-muted-foreground">
          Receive a detailed quote within 48 hours for your oil & gas construction project.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quote-name">Full Name *</Label>
              <Input
                id="quote-name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="quote-email">Email Address *</Label>
              <Input
                id="quote-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quote-company">Company</Label>
              <Input
                id="quote-company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="quote-phone">Phone Number</Label>
              <Input
                id="quote-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="quote-project-type">Project Type *</Label>
            <Select onValueChange={(value) => handleChange("projectType", value)}>
              <SelectTrigger className="mt-1">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quote-timeline">Project Timeline</Label>
              <Select onValueChange={(value) => handleChange("timeline", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                  <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                  <SelectItem value="long">Long-term (12+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quote-budget">Estimated Budget</Label>
              <Select onValueChange={(value) => handleChange("budget", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1m">Under $1M</SelectItem>
                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                  <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                  <SelectItem value="10m-25m">$10M - $25M</SelectItem>
                  <SelectItem value="over-25m">Over $25M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="quote-location">Project Location</Label>
            <Input
              id="quote-location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="City, State"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="quote-message">Project Details *</Label>
            <Textarea
              id="quote-message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={4}
              className="mt-1"
              placeholder="Please describe your project requirements, scope, and any specific details..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-energy-orange hover:bg-energy-orange/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Quote"}
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
