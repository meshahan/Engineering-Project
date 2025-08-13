"use client"

import Image from "next/image"
import { useState } from "react"

import { CardCarousel } from "@/components/ui/card-carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

type GalleryItem = {
  src: string
  alt: string
  title?: string
  details?: {
    category?: string
    location?: string
    completed?: string
    value?: string
    duration?: string
    sections?: Array<{ heading: string; bullets: string[] }>
  }
}

interface ProjectGalleryProps {
  images: GalleryItem[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [active, setActive] = useState<GalleryItem | null>(null)

  return (
    <div>
      <CardCarousel
        images={images}
        autoplayDelay={3000}
        showPagination
        showNavigation
        onSelect={(img) => setActive(img)}
      />

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {active && (
            <div className="relative">
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <Badge className="bg-energy-orange text-white mb-3">{active.details?.category ?? "Gallery"}</Badge>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    {active.title ?? active.alt}
                  </h2>
                  <p className="text-sm opacity-90 mt-1">{active.alt}</p>
                </div>
              </div>

              <div className="px-6 py-6 bg-white">
                {/* Top meta */}
                {(active.details?.location || active.details?.completed || active.details?.value || active.details?.duration) && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border rounded-xl p-4 mb-6">
                    {active.details?.location && (
                      <div>
                        <div className="text-xs text-muted-foreground">Location</div>
                        <div className="font-medium">{active.details.location}</div>
                      </div>
                    )}
                    {active.details?.completed && (
                      <div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                        <div className="font-medium">{active.details.completed}</div>
                      </div>
                    )}
                    {active.details?.value && (
                      <div>
                        <div className="text-xs text-muted-foreground">Value</div>
                        <div className="font-medium">{active.details.value}</div>
                      </div>
                    )}
                    {active.details?.duration && (
                      <div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <div className="font-medium">{active.details.duration}</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Sections */}
                {active.details?.sections && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {active.details.sections.map((section, idx) => (
                      <div key={idx} className="border rounded-xl p-4">
                        <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">
                          {section.heading}
                        </h3>
                        <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                          {section.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}


