import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-xl">Ciencias de la Computación</CardTitle>
                  <CardDescription>Universidad Nacional del Sur</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Licenciatura en Ciencias de la Computación</p>
              <p className="text-sm text-muted-foreground mt-2">80% completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-xl">Ayudante de docencia</CardTitle>
                  <CardDescription>Universidad Nacional del Sur</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">Materia: "Resolución de problemas y algoritmos"</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Guiar a los estudiantes con los trabajos prácticos</li>
                <li>• Corrección de examenes y proyectos</li>
                <li>• Apoyo en proyectos de programación</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
