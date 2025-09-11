"use client"

import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground text-center">
          <p className="text-lg leading-relaxed">{t("about.description")}</p>
        </div>
      </div>
    </section>
  )
}
