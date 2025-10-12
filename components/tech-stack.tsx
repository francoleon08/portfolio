"use client"

import { Badge } from "@/components/ui/badge"
import { useTechStack } from "@/hooks/use-portfolio-data"
import { Loader2 } from "lucide-react"

export function TechStack() {
  const { techStack, loading, error } = useTechStack()

  if (loading) {
    return (
      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="text-center text-red-500">
            Error al cargar el tech stack: {error}
          </div>
        </div>
      </section>
    )
  }

  if (!techStack) {
    return (
      <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="text-center text-muted-foreground">
            No hay datos disponibles
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="space-y-8">
          {Object.entries(techStack.techStack).map(([category, technologies]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech: string) => (
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
