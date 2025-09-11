"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.tech": "Tecnologías",
    "nav.contact": "Contacto",

    // Hero
    "hero.name": "Franco Leon",
    "hero.title": "Desarrollador Backend y Full Stack Jr",
    "hero.subtitle":
      "Estudiante Avanzado de Ciencias de la Computación | Ayudante de Cátedra en Universidad Nacional del Sur",
    "hero.description": "Construyo aplicaciones web robustas y escalabes usando Spring Boot, React y Docker.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.resume": "Ver CV",
    "hero.contact": "Contacto",

    // About
    "about.title": "Acerca de Mí",
    "about.description":
      'Soy un desarrollador orientado al backend especializado en construir aplicaciones robustas con Spring Boot, MySQL y Docker. También trabajo con React para desarrollo frontend. Tengo experiencia en proyectos del mundo real, incluyendo sistemas de gestión comercial en producción. Actualmente, soy estudiante avanzado de Ciencias de la Computación en la Universidad Nacional del Sur y ayudante de cátedra en la materia "Resolución de Problemas y Algoritmos."',

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.commercial.title": "Sistema de Gestión Comercial",
    "projects.commercial.description":
      'Sistema integral basado en el "método de percepción de efectivo", gestionando ventas, compras, costos fijos, proveedores, cajas, conciliaciones y flujo de capital. Integrado con servicios web SOAP de ARCA (ex-AFIP).',
    "projects.commercial.tech": "Spring Boot 3, MySQL, Docker, Servicios Web SOAP, Don Web",
    "projects.website.title": "Sitio Web Estático",
    "projects.website.description":
      "Sitio web estático profesional desarrollado para un cliente con diseño moderno y layout responsivo.",
    "projects.website.tech": "React, HTML, CSS, JavaScript",
    "projects.gym.title": "Sitio Web de Gimnasio",
    "projects.gym.description":
      "Sistema de reserva de citas para un gimnasio con gestión de usuarios y funciones de programación.",
    "projects.gym.tech": "React, Spring Boot, MySQL",
    "projects.netflix.title": "Clon de Netflix con Microservicios",
    "projects.netflix.description":
      "Clon escalable de Netflix que muestra arquitectura de microservicios y prácticas de desarrollo modernas.",
    "projects.netflix.tech": "Spring Boot, React, Docker, Microservicios",
    "projects.private": "Repositorio Privado",
    "projects.viewCode": "Ver Código",

    // Education
    "education.title": "Educación",
    "education.degree": "Licenciatura en Ciencias de la Computación",
    "education.university": "Universidad Nacional del Sur",
    "education.progress": "80% completado",

    // Experience
    "experience.title": "Experiencia",
    "experience.commercial.title": "Sistema de Gestión Comercial",
    "experience.commercial.company": "Proyecto Profesional",
    "experience.commercial.period": "2025 - Presente",
    "experience.commercial.description":
      "Estudio de mercado, análisis, desarrollo y mantenimiento de un sistema integral de gestión comercial en producción integrado con ARCA (ex AFIP), manejando operaciones críticas del negocio.",
    "experience.commercial.responsibilities": [
      "Desarrollo de arquitectura backend con Spring Boot 3",
      "Integración con servicios web SOAP de ARCA (ex-AFIP)",
      "Creación y gestión de base de datos MySQL y optimización de consultas",
      "Implementación de contenedores Docker para despliegue",
      "Mantenimiento y soporte de sistema en producción",
      "Politicas de backup y recuperación de datos",
      "Colaboración con clientes para entender y cumplir requisitos",
    ],
    "experience.academic.title": "Ayudante de Cátedra",
    "experience.academic.company": "Universidad Nacional del Sur",
    "experience.academic.period": "2025 - Presente",
    "experience.academic.description":
      "Apoyo académico en la materia 'Resolución de Problemas y Algoritmos' para estudiantes de Ciencias de la Computación.",
    "experience.academic.responsibilities": [
      "Guía a estudiantes en trabajos prácticos de programación",
      "Corrección y evaluación de exámenes",
      "Apoyo en proyectos de algoritmos y estructuras de datos",
      "Mentoría en buenas prácticas de programación",
      "Colaboración con el profesor titular, asistente y otros ayudantes",
    ],
    "experience.frontend.title": "Prodeconsa SA",
    "experience.frontend.company": "Coderhouse - Proyecto Laboral",
    "experience.frontend.period": "2022 - 2022",
    "experience.frontend.description":
      "Desarrollo frontend para un sitio web estático profesional, asegurando un diseño moderno y responsivo.",
    "experience.frontend.responsibilities": [
      "Desarrollo de frontend con HTML, CSS y JavaScript",
      "Implementación de diseño responsivo",
      "Colaboración con diseñadores para cumplir requisitos visuales",
      "Optimización del rendimiento del sitio web",
    ],

    // Tech Stack
    "tech.title": "Stack Tecnológico",
    "tech.backend": "Backend",
    "tech.frontend": "Frontend",
    "tech.infrastructure": "Infraestructura",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.description": "¡No dudes en contactarme para colaboraciones o simplemente para saludar!",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
