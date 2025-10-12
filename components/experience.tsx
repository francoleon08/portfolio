"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { useExperience } from "@/hooks/use-portfolio-data"
import { Loader2 } from "lucide-react"

export function Experience() {
  const { t } = useLanguage()
  const { experience, loading, error } = useExperience()

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t("experience.title")}</h2>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t("experience.title")}</h2>
          <div className="text-center text-red-500">
            Error al cargar la experiencia: {error}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t("experience.title")}</h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-16">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                          <Badge variant={exp.type === "professional" ? "default" : "secondary"} className="mb-3">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div>
                        <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Responsabilidades:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility: string, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
