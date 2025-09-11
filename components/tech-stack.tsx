import { Badge } from "@/components/ui/badge"

export function TechStack() {
  const techStack = {
    Backend: ["Spring Boot 3", "Java", "MySQL", "Docker", "SOAP/REST APIs", "JPA/Hibernate", "Maven"],
    Testing: ["JUnit", "Mockito", "Postman", "Playwright"],
    Frontend: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    Infrastructure: ["Docker", "Don Web Cloud VPS", "Vercel", "Render", "Git", "GitHub", "Linux"],
  }

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="space-y-8">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm py-2 px-4">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
