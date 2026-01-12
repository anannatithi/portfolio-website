import Link from "next/link"
import { ExternalLink, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const publications = [
  {
    title: "Pregnant Women's Condition and Awareness About Mood Swings: A Survey Study in Bangladesh",
    publisher: "Springer - Intelligent Computing and Optimization (ICO 2018)",
    year: "2019",
    links: [
      { name: "Springer", url: "https://link.springer.com/chapter/10.1007/978-3-030-19063-7_60" },
      {
        name: "Semantic Scholar",
        url: "https://www.semanticscholar.org/paper/Pregnant-Women's-Condition-and-Awareness-About-Mood-Jahan-Fariha/b27b2076e8ab0d1f3be5bec5d08f81a28a8f1be6#citing-papers",
      },
      {
        name: "ResearchGate",
        url: "https://www.researchgate.net/publication/333304471_Pregnant_Women%27s_Condition_and_Awareness_About_Mood_Swings_A_Survey_Study_in_Bangladesh",
      },
    ],
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Publications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Research & Publications</h2>
          <p className="text-muted-foreground leading-relaxed">
            Academic contributions and published research work in the field of technology and healthcare.
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-foreground text-xl leading-relaxed">{pub.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {pub.publisher} • {pub.year}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 ml-16">
                  {pub.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
