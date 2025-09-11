import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Lock } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "SumarSi Gestión",
      description:
        "Sistema integral para gestión comercial basado en el \"método de lo percibido\", gestionando ventas, compras, costos fijos, proveedores, cajas, conciliaciones y flujo de capital. Integrado con servicios web SOAP de ARCA (ex-AFIP) para facturación electrónica.",
      stack: ["Spring Boot 3", "MySQL", "ReactJs", "Docker", "Jwt", "SOAP Web Services", "Don Web"],
      isPrivate: true,
      note: "Repositorio Privado por contrato con el cliente. Si deseas más información, contáctame.",
    },
    {
      title: "Clon de Netflix con Microservicios",
      description:
        "Clon escalable de Netflix que muestra arquitectura de microservicios y prácticas de desarrollo modernas. Incluye un catalogo de películas y un sistema de recomendaciones en Python.",
      stack: ["React", "Spring Boot", "Docker", "MongoDB", "RabbitMQ", "Python", "C#"],
      isPrivate: false,
      link: "https://github.com/francoleon08/proyecto-topicos-microservicios",
    },
    {
      title: "Prodeconsa S.A. - Sitio Web Estático",
      description:
        "Sitio web estático profesional desarrollado para un cliente con diseño moderno y layout responsivo.",
      stack: ["HTML", "CSS", "JavaScript"],
      isPrivate: false,
      link: "https://prodeconsa-sa.vercel.app/",
    },
    {
      title: "Gym Access - Reserva de Turnos",
      description:
        "Sistema de reserva de turnos para un gimnasio.",
      stack: ["React", "Express", "TypeScript", "PostgreSQL", "Superbase"],
      isPrivate: false,
      link: "https://react-express-iaweb-0z24.onrender.com/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.isPrivate ? (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    project.link && (
                      <ExternalLink
                        className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                        onClick={() => window.open(project.link, "_blank")}
                      />
                    )
                  )}
                </div>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.note && <p className="text-xs text-muted-foreground italic">{project.note}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
