"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import { Badge } from "@/components/ui/badge"

export type ShowcaseProject = {
  category: string
  title: string
  description: string
  image: string
  meta: {
    location: string
    completed: string
    value: string
    duration: string
  }
  scope: string[]
  challenges: string[]
}

interface ProjectShowcaseProps {
  projects: ShowcaseProject[]
  autoplayMs?: number
}

export function ProjectShowcase({ projects, autoplayMs = 5000 }: ProjectShowcaseProps) {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{ delay: autoplayMs, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden"
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative min-h-[70vh] w-full">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-white">
                  <Badge className="bg-energy-orange text-white">{p.category}</Badge>
                  <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">{p.title}</h2>
                  <p className="mt-3 max-w-3xl text-gray-200 text-lg">{p.description}</p>
                </div>

                {/* Meta */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/90">
                  <div>
                    <div className="text-xs opacity-80">Location</div>
                    <div className="font-semibold">{p.meta.location}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Completed</div>
                    <div className="font-semibold">{p.meta.completed}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Value</div>
                    <div className="font-semibold">{p.meta.value}</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Duration</div>
                    <div className="font-semibold">{p.meta.duration}</div>
                  </div>
                </div>

                {/* Cards */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-xl bg-white text-deep-navy p-6">
                    <h3 className="text-2xl font-serif font-bold mb-4">Project Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      {p.scope.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white text-deep-navy p-6">
                    <h3 className="text-2xl font-serif font-bold mb-4">Key Challenges</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      {p.challenges.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-white text-deep-navy p-6">
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Solutions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Advanced foundation design</li>
                      <li>Environmental monitoring systems</li>
                      <li>Streamlined logistics planning</li>
                      <li>Rigorous quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


