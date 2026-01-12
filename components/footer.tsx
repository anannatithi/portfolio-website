import Link from "next/link"
import { Linkedin, Gitlab as GitLab, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-bold text-foreground">
              Musfika<span className="text-primary">.</span>
            </Link>
            <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/musfika-rahman"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://gitlab.com/ananna.tithi"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitLab"
            >
              <GitLab size={18} />
            </Link>
            <Link
              href="mailto:musfika.ananna2019@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
