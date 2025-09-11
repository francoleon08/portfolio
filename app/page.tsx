"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Education />
            <Experience />
            <TechStack />
            <Contact />
          </main>
          <footer className="border-t border-border py-8">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} Franco Leon. | Desarrolado con{" "}
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Next.js
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Tailwind CSS
                </a>
                , y{" "}
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Vercel
                </a>
                . | Con asistencia de {" "}
                <a
                  href="https://v0.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  V0
                </a>                
              </p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
