"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    //TODO: Integrar con un servicio de email o backend
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>Me encataría saber de tu proyecto o simplemente saludarte!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="mb-1">Nombre</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-1">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-1">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Conecta conmigo</CardTitle>
                <CardDescription>Buscame en redes o envíame un email</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://github.com/francoleon08" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/francoleondev/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="mailto:francoleondev@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    francoleondev@gmail.com
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="mailto:franco.leon@uns.edu.ar">
                    <Mail className="mr-2 h-4 w-4" />
                    franco.leon@uns.edu.ar
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
