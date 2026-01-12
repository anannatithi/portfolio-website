import Link from "next/link"
import { ArrowRight, Linkedin, Gitlab as GitLab, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Musfika Rahman Ananna
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Senior Flutter Developer | FinTech Mobile App Engineer
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Results-driven Flutter Developer with over 6 years of experience designing and delivering secure,
              high-performance mobile applications across FinTech, e-learning, and logistics domains.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://linkedin.com/in/musfika-rahman"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://gitlab.com/ananna.tithi"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitLab size={20} />
              </Link>
              <Link
                href="mailto:musfika.ananna2019@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary">MR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
