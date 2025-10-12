"use client"

import { useLanguage } from "@/components/language-provider"
import { usePersonal } from "@/hooks/use-portfolio-data"
import { Loader2 } from "lucide-react"

export function About() {
  const { t } = useLanguage()
  const { personal, loading, error } = usePersonal()

  if (loading) {
    return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h2>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    )
  }

  if (error || !personal) {
    return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h2>
          <div className="text-center text-red-500">
            Error al cargar la información personal: {error}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground text-center">
          <p className="text-lg leading-relaxed">{personal.about}</p>
        </div>
      </div>
    </section>
  )
}
