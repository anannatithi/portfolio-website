import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const skills = {
  Languages: ["Dart", "Java", "Kotlin", "Swift", "C#"],
  "Frameworks & Platforms": ["Flutter", "Android SDK", "Xamarin"],
  "State Management": ["Provider", "BLoC"],
  Architecture: ["Clean Architecture", "MVVM"],
  "Mobile Tools": ["Firebase", "Apple Wallet", "RabbitMQ", "Google Maps", "Push Notifications"],
  Databases: ["SQLite", "Room DB", "MySQL"],
  Testing: ["Unit Testing", "Penetration Testing Validation"],
  Deployment: ["App Store", "Play Store"],
  "Version Control": ["Git", "Bitbucket", "GitLab"],
  "SDLC & Collaboration": ["Agile/Scrum", "Jira", "Confluence", "Slack"],
  "API Integration": ["RESTful APIs", "Secure Auth", "3rd-party SDKs"],
}

const experience = [
  {
    company: "Silverlake Axis Limited",
    role: "Software Engineer – Mobile Application",
    period: "Mar 2022 – Present",
    location: "Kuala Lumpur, Malaysia",
  },
  {
    company: "Business Accelerate BD Ltd.",
    role: "Software Engineer",
    period: "Dec 2018 – Feb 2022",
    location: "Dhaka, Bangladesh",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate about building secure, high-performance mobile applications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in Flutter/Dart and native development with Java/Kotlin and Swift, with strong experience in
              REST APIs, Firebase, and third-party SDK integrations. Comfortable working in Agile/Scrum teams, following
              clean code principles, and collaborating with cross-functional stakeholders.
            </p>
          </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-primary mb-1">{exp.period}</p>
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="pl-6 border-l-2 border-border">
                <p className="text-sm text-primary mb-1">2018</p>
                <h4 className="text-lg font-semibold text-foreground">BSc in Computer Science and Engineering</h4>
                <p className="text-muted-foreground">East West University, Dhaka</p>
                <p className="text-sm text-muted-foreground">CGPA: 3.32 / 4.00</p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    National Mobile App Trainee – ICT Division, Bangladesh
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Web Development – EWU Robotics Club
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Attendee – IMCOM 2019 Conference (Thailand)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
