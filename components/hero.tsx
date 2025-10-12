"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePersonal } from "@/hooks/use-portfolio-data"

export function Hero() {
  const { t } = useLanguage()
  const { personal, loading, error } = usePersonal()

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  if (error || !personal) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-red-500">
            Error al cargar la información personal: {error}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-balance">{personal.name}</h1>
        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4">{personal.title}</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">{personal.subtitle}</p>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{personal.description}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild>
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t("hero.github")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              {t("hero.linkedin")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              {t("hero.resume")}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            {t("hero.contact")}
          </Button>
        </div>
      </div>
    </section>
  )
}
