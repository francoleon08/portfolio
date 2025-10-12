"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Loader2 } from "lucide-react"
import { useEducation } from "@/hooks/use-portfolio-data"

export function Education() {
  const { education, loading, error } = useEducation()

  if (loading) {
    return (
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Educación</h2>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Educación</h2>
          <div className="text-center text-red-500">
            Error al cargar la educación: {error}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={edu.id || index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  {edu.title.toLowerCase().includes('ayudante') || edu.title.toLowerCase().includes('docencia') ? (
                    <Users className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                  <div>
                    <CardTitle className="text-xl">{edu.title}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {edu.progress}% {edu.status === 'en_progress' ? 'completado' : edu.status === 'completed' ? 'completado' : 'activo'}
                </p>
                {edu.description && (
                  <p className="text-muted-foreground mb-3 mt-2">{edu.description}</p>
                )}
                {edu.responsibilities && edu.responsibilities.length > 0 && (
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {edu.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>• {responsibility}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
