import { Smartphone, Shield, Zap, Code, Database, Cloud } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using Flutter and native Android/iOS development with Kotlin and Swift.",
  },
  {
    icon: Shield,
    title: "FinTech Solutions",
    description:
      "Developing secure banking applications with biometric authentication, encryption, and compliance with security standards.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing app performance through efficient state management, clean architecture, and best coding practices.",
  },
  {
    icon: Code,
    title: "API Integration",
    description:
      "Seamless integration with RESTful APIs, third-party SDKs, and backend services for robust app functionality.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Implementing local storage solutions using SQLite, Room DB, and Firebase for offline-capable applications.",
  },
  {
    icon: Cloud,
    title: "App Deployment",
    description: "End-to-end deployment to App Store and Play Store with CI/CD pipelines and post-launch maintenance.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What I can do for you</h2>
          <p className="text-muted-foreground leading-relaxed">
            With expertise in mobile development across multiple platforms, I deliver end-to-end solutions tailored to
            your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
