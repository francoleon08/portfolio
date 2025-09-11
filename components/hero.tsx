"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-balance">{t("hero.name")}</h1>
        <h2 className="text-xl sm:text-2xl text-muted-foreground mb-4">{t("hero.title")}</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">{t("hero.subtitle")}</p>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">{t("hero.description")}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild>
            <a href="https://github.com/francoleon08" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t("hero.github")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/francoleondev/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              {t("hero.linkedin")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
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
