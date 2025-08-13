"use client"

import type React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"
import { X, Calendar, MapPin, DollarSign, Clock } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  category: string
  location: string
  completionDate: string
  value: string
  duration: string
  details: string[]
  challenges: string[]
  solutions: string[]
}

interface CompactGalleryProps {
  projects: ProjectData[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CompactProjectGallery: React.FC<CompactGalleryProps> = ({
  projects,
  autoplayDelay = 2000,
  showPagination = true,
  showNavigation = true,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const duplicatedProjects = [...projects, ...projects, ...projects]

  const css = `
  .compact-swiper {
    width: 100%;
    padding-bottom: 30px;
    height: 400px;
  }
  
  .compact-swiper .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 320px;
    flex-shrink: 0;
  }
  
  .compact-swiper .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .compact-swiper .swiper-slide img:hover {
    transform: scale(1.05);
  }
  
  .compact-swiper .swiper-3d .swiper-slide-shadow-left,
  .compact-swiper .swiper-3d .swiper-slide-shadow-right {
    background: none;
  }
  
  .compact-swiper .swiper-pagination-bullet {
    background: #FF6A00;
  }
  `

  return (
    <>
      <style>{css}</style>
      <section className="w-full space-y-4">
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-black/5 p-4 shadow-sm bg-white">
          <div className="text-center mb-6">
            <Badge className="mb-2 bg-energy-orange text-white">Project Gallery</Badge>
            <h3 className="text-2xl font-bold text-deep-navy mb-2">Construction Gallery</h3>
            <p className="text-muted-foreground">Click on any project to view detailed information</p>
          </div>

          <div className="w-full">
            <Swiper
              className="compact-swiper"
              spaceBetween={30}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
              }}
              loopAdditionalSlides={2}
              watchSlidesProgress={true}
              pagination={showPagination}
              navigation={showNavigation}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {duplicatedProjects.map((project, index) => (
                <SwiperSlide key={`${project.id}-${index}`}>
                  <div
                    className="w-full h-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={280}
                      height={320}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h4 className="font-semibold text-sm">{project.title}</h4>
                        <p className="text-xs opacity-90">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 bg-white/90 hover:bg-white"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  fill
                  className="object-cover rounded-t-2xl"
                  alt={selectedProject.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="mb-2 bg-energy-orange">{selectedProject.category}</Badge>
                  <h2 className="text-3xl font-serif font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-lg opacity-90">{selectedProject.description}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-energy-orange" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-energy-orange" />
                    <div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="font-semibold">{selectedProject.completionDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-energy-orange" />
                    <div>
                      <p className="text-xs text-muted-foreground">Value</p>
                      <p className="font-semibold">{selectedProject.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-energy-orange" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold">{selectedProject.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-deep-navy mb-3">Project Details</h3>
                      <ul className="space-y-2">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-deep-navy mb-3">Key Challenges</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-petrol-blue rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-deep-navy mb-3">Our Solutions</h3>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-energy-orange rounded-full mt-2 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
