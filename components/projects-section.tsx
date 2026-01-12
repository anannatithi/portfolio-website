"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  )
}

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.809 14.924l6.11-11.037c.566-1.012-.123-2.287-1.123-2.287-.451 0-.869.252-1.108.658l-.46.833-.467-.833A1.285 1.285 0 0 0 10.652 1.6c-1 0-1.69 1.275-1.123 2.287l1.145 2.067L7.26 12.375l1.549 2.549zm5.516 0H22.5c.828 0 1.5-.677 1.5-1.512s-.672-1.512-1.5-1.512h-5.698l-2.477 3.024zm-8.97 3.024c-.828 0-1.5.677-1.5 1.512 0 .834.672 1.512 1.5 1.512h.07l1.91-3.024H5.355zm2.751 0l-2.18 3.456a1.285 1.285 0 0 0 1.109 1.968c.451 0 .869-.252 1.108-.658L13.026 14.4l-1.549-2.55-3.371 6.098zm8.97 0l-2.899-5.237-1.549 2.549 1.778 3.212a1.285 1.285 0 0 0 1.108.658c1 0 1.69-1.275 1.123-2.287l-.288-.52h2.227c.828 0 1.5-.677 1.5-1.512s-.672-1.512-1.5-1.512h-4.35l-1.549 2.549h4.399v2.1z" />
    </svg>
  )
}

type Project = {
  title: string
  description: string
  techStack: string[]
  highlights: string[]
  image?: string
  storeLinks?: {
    playStore?: string
    appStore?: string
  }
}

const projects: Record<string, Project[]> = {
  banking: [
    {
      title: "CBI – Corporate & Retail Mobile Banking",
      description:
        "A comprehensive banking application for corporate and retail customers with secure transaction capabilities.",
      techStack: ["Flutter", "Dart", "Kotlin", "Swift", "Firebase", "RabbitMQ", "Apple Wallet", "REST API", "Xamarin"],
      highlights: [
        "Secure transactions",
        "Biometric login",
        "Push notifications",
        "Jailbreak/root detection",
        "Memory leak prevention",
      ],
      image: "/images/cbi.webp",
      storeLinks: {
        playStore: "https://play.google.com/store/apps/details?id=com.silverlake.cbimobileretail&hl=en",
        appStore: "https://apps.apple.com/us/app/cbi-personal-banking/id1242217571",
      },
    },
    {
      title: "People's Bank – Mobile Banking",
      description:
        "Corporate and retail mobile banking application enabling business banking tasks and personal finance management on the go.",
      techStack: ["Flutter", "Dart", "RabbitMQ", "REST API", "Xamarin", "Kotlin", "Clean Architecture"],
      highlights: ["Business banking", "Personal finance", "Clean architecture", "Cross-platform support"],
      image: "/images/peoplesbank.webp",
      storeLinks: {
        playStore: "https://play.google.com/store/apps/details?id=com.peoplesbank.retailbanking&hl=en",
        appStore: "https://apps.apple.com/us/app/peoples-wave/id1317192647",
      },
    },
    {
      title: "The City Bank – LWF Mobile App",
      description: "Liability Workflow management application for The City Bank with streamlined business processes.",
      techStack: ["Flutter", "Dart", "REST API", "Retrofit 2", "SQLite", "Clean Architecture"],
      highlights: ["Workflow management", "Liability tracking", "Offline support"],
      image: "/images/citybank.webp",
    },
  ],
  ecommerce: [
    {
      title: "Coca-Cola – Smart Sales",
      description:
        "Secondary sales and delivery application for Coca-Cola with comprehensive offline capabilities and location tracking.",
      techStack: ["Java", "Retrofit 2", "SQLite", "MVVM"],
      highlights: ["Offline syncing", "Location tracking", "Sales management", "Route optimization"],
      image: "/coca-cola-red-logo-brand.jpg",
    },
    {
      title: "Shah Cement – Smart Sales",
      description:
        "Sales force automation application for Shah Cement distributors with inventory management and order processing.",
      techStack: ["Java", "Retrofit 2", "SQLite", "MVVM"],
      highlights: ["Inventory management", "Order processing", "Distributor management", "Sales tracking"],
      image: "/shah-cement-logo-bangladesh.jpg",
    },
    {
      title: "Omera LPG – Smart Sales",
      description:
        "Distribution and sales management application for Omera LPG with delivery tracking and customer management.",
      techStack: ["Java", "Retrofit 2", "SQLite", "MVVM"],
      highlights: ["Delivery tracking", "Customer management", "Sales analytics", "Route planning"],
      image: "/images/omera.webp",
    },
    {
      title: "Fordo",
      description: "E-commerce mobile application with clean architecture and modern Android development practices.",
      techStack: ["Native Java", "SQLite DB", "MVVM", "Clean Architecture"],
      highlights: ["Clean architecture", "Offline support", "Modern UI", "Performance optimized"],
      image: "/fordo-ecommerce-shopping-app-logo.jpg",
    },
    {
      title: "Malle-e",
      description: "E-commerce platform built with native Android development following clean architecture principles.",
      techStack: ["Native Java", "SQLite DB", "MVVM", "Clean Architecture"],
      highlights: ["Product catalog", "Shopping cart", "Order management", "User authentication"],
      image: "/malle-e-ecommerce-mobile-app-logo.jpg",
    },
    {
      title: "Gypsy",
      description:
        "Native Android e-commerce application with robust offline capabilities and clean architecture implementation.",
      techStack: ["Native Java", "SQLite DB", "MVVM", "Clean Architecture"],
      highlights: ["Offline-first", "Clean code", "Scalable architecture", "Fast performance"],
      image: "/gypsy-mobile-commerce-app-logo.jpg",
    },
  ],
  elearning: [
    {
      title: "FIWI – Financial Wellness E-learning",
      description:
        "E-learning platform focused on financial wellness with live video courses and subscription management.",
      techStack: ["Flutter", "Firebase", "Video Streaming", "In-app Purchase"],
      highlights: ["Live video courses", "Paywalls", "Push notifications", "User subscriptions"],
      image: "/images/fiwi.jpg",
    },
  ],
  delivery: [
    {
      title: "Relief Management App",
      description:
        "Humanitarian relief distribution app with facial recognition and barcode validation for secure relief delivery.",
      techStack: ["Java", "Firebase", "ML Kit", "Camera API", "REST API", "Retrofit 2", "SQLite", "Zxing"],
      highlights: ["Offline-capable", "Facial recognition", "Barcode validation", "Relief tracking"],
      image: "/images/relief.jpg",
    },
    {
      title: "Transport – Delivery App",
      description: "Logistics and delivery management application with real-time notifications and tracking.",
      techStack: ["Java", "Push Notification", "REST API"],
      highlights: ["Real-time tracking", "Push notifications", "Delivery management"],
      image: "/transport-delivery-logistics-truck-app.jpg",
    },
  ],
}

const tabLabels: Record<string, string> = {
  banking: "Banking",
  ecommerce: "E-Commerce",
  elearning: "E-Learning",
  delivery: "Delivery",
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("banking")

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Featured Work</h2>
          <p className="text-muted-foreground leading-relaxed">
            A selection of projects I've worked on across different domains, showcasing my expertise in mobile
            development.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent mb-8">
            {Object.keys(projects).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border data-[state=active]:border-primary"
              >
                {tabLabels[category]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-background border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                  >
                    {project.image && (
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                        {project.storeLinks && (
                          <div className="flex gap-2 shrink-0">
                            {project.storeLinks.playStore && (
                              <Link
                                href={project.storeLinks.playStore}
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="Play Store"
                              >
                                <PlayStoreIcon className="w-5 h-5" />
                              </Link>
                            )}
                            {project.storeLinks.appStore && (
                              <Link
                                href={project.storeLinks.appStore}
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                title="App Store"
                              >
                                <AppStoreIcon className="w-5 h-5" />
                              </Link>
                            )}
                          </div>
                        )}
                        {!project.storeLinks && (
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-2">Key Features</h4>
                        <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 4 && (
                            <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                              +{project.techStack.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
