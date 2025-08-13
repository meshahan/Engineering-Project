import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Construction, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news and updates from Oil & Gas Construction Co.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative py-20 bg-gradient-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-energy-orange text-white">News & Updates</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Latest News</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with our latest projects, industry insights, and company news.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12">
              <Construction className="h-16 w-16 text-energy-orange mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Under Construction</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our news section is currently being developed. Check back soon for the latest updates on our projects
                and industry insights.
              </p>
              <Button asChild className="bg-energy-orange hover:bg-energy-orange/90">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
