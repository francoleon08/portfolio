import { useState, useEffect } from 'react'
import { GITHUB_DATA_URLS } from '@/lib/github-data'

interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  isPrivate: boolean
  note?: string
  link?: string
  image?: string
  featured: boolean
}

interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
  type: 'professional' | 'academic'
  location: string
  technologies: string[]
}

interface Education {
  id: string
  title: string
  institution: string
  degree: string
  period: string
  progress: number
  description: string
  location: string
  status: 'completed' | 'en_progress' | 'active'
  gpa?: number
  relevant_courses?: string[]
  responsibilities?: string[]
}

interface Personal {
  name: string
  title: string
  subtitle: string
  description: string
  about: string
  location: string
  email: string
  phone?: string
  website?: string
  social: {
    github: string
    linkedin: string
    twitter?: string
    instagram?: string
  }
  resume: string
  profile_image: string
  cover_image?: string
}

interface TechStack {
  [key: string]: string[]
}

interface Skills {
  programming_languages: string[]
  frameworks: string[]
  databases: string[]
  tools: string[]
  cloud_platforms: string[]
  operating_systems: string[]
}

interface PortfolioData {
  projects: Project[]
  experience: Experience[]
  education: Education[]
  personal: Personal
  techStack: TechStack
  skills: Skills
}

// Función para obtener datos desde GitHub como fallback
async function fetchFromGitHub<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Portfolio-Data-Fetcher/1.0'
    }
  })
  
  if (!response.ok) {
    throw new Error(`GitHub fetch failed: ${response.status} ${response.statusText}`)
  }
  
  return response.json()
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Intentar obtener datos desde la API local primero
        try {
          const [projectsRes, experienceRes, educationRes, personalRes, techStackRes] = await Promise.all([
            fetch('/api/data/projects'),
            fetch('/api/data/experience'),
            fetch('/api/data/education'),
            fetch('/api/data/personal'),
            fetch('/api/data/tech-stack')
          ])

          if (projectsRes.ok && experienceRes.ok && educationRes.ok && personalRes.ok && techStackRes.ok) {
            const [projectsData, experienceData, educationData, personalData, techStackData] = await Promise.all([
              projectsRes.json(),
              experienceRes.json(),
              educationRes.json(),
              personalRes.json(),
              techStackRes.json()
            ])

            setData({
              projects: projectsData.projects,
              experience: experienceData.experiences,
              education: educationData.education,
              personal: personalData.personal,
              techStack: techStackData.techStack,
              skills: techStackData.skills
            })
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback: obtener datos directamente desde GitHub
        const [projectsData, experienceData, educationData, personalData, techStackData] = await Promise.all([
          fetchFromGitHub(GITHUB_DATA_URLS.projects),
          fetchFromGitHub(GITHUB_DATA_URLS.experience),
          fetchFromGitHub(GITHUB_DATA_URLS.education),
          fetchFromGitHub(GITHUB_DATA_URLS.personal),
          fetchFromGitHub(GITHUB_DATA_URLS.techStack)
        ])

        setData({
          projects: projectsData.projects,
          experience: experienceData.experiences,
          education: educationData.education,
          personal: personalData.personal,
          techStack: techStackData.techStack,
          skills: techStackData.skills
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching portfolio data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

// Individual hooks for specific data
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        
        // Intentar API local primero
        try {
          const response = await fetch('/api/data/projects')
          if (response.ok) {
            const data = await response.json()
            setProjects(data.projects)
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback a GitHub
        const data = await fetchFromGitHub(GITHUB_DATA_URLS.projects)
        setProjects(data.projects)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export function useExperience() {
  const [experience, setExperience] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true)
        
        // Intentar API local primero
        try {
          const response = await fetch('/api/data/experience')
          if (response.ok) {
            const data = await response.json()
            setExperience(data.experiences)
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback a GitHub
        const data = await fetchFromGitHub(GITHUB_DATA_URLS.experience)
        setExperience(data.experiences)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchExperience()
  }, [])

  return { experience, loading, error }
}

export function useEducation() {
  const [education, setEducation] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true)
        
        // Intentar API local primero
        try {
          const response = await fetch('/api/data/education')
          if (response.ok) {
            const data = await response.json()
            setEducation(data.education)
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback a GitHub
        const data = await fetchFromGitHub(GITHUB_DATA_URLS.education)
        setEducation(data.education)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchEducation()
  }, [])

  return { education, loading, error }
}

export function usePersonal() {
  const [personal, setPersonal] = useState<Personal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPersonal = async () => {
      try {
        setLoading(true)
        
        // Intentar API local primero
        try {
          const response = await fetch('/api/data/personal')
          if (response.ok) {
            const data = await response.json()
            setPersonal(data.personal)
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback a GitHub
        const data = await fetchFromGitHub(GITHUB_DATA_URLS.personal)
        setPersonal(data.personal)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPersonal()
  }, [])

  return { personal, loading, error }
}

export function useTechStack() {
  const [techStack, setTechStack] = useState<{ techStack: TechStack; skills: Skills } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        setLoading(true)
        
        // Intentar API local primero
        try {
          const response = await fetch('/api/data/tech-stack')
          if (response.ok) {
            const data = await response.json()
            setTechStack(data)
            return
          }
        } catch (apiError) {
          console.warn('API local failed, trying GitHub directly:', apiError)
        }

        // Fallback a GitHub
        const data = await fetchFromGitHub(GITHUB_DATA_URLS.techStack)
        setTechStack(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTechStack()
  }, [])

  return { techStack, loading, error }
}
