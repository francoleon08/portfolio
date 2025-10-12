/**
 * Utilidades para obtener datos desde GitHub
 */

const GITHUB_DATA_BASE_URL = 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main'

export interface GitHubDataResponse<T> {
  data: T | null
  error: string | null
  lastModified?: string
}

/**
 * Obtiene datos desde GitHub con cache y manejo de errores
 */
export async function fetchGitHubData<T>(
  filename: string,
  options: {
    cache?: RequestCache
    revalidate?: number
  } = {}
): Promise<GitHubDataResponse<T>> {
  try {
    const url = `${GITHUB_DATA_BASE_URL}/${filename}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Portfolio-Data-Fetcher/1.0'
      },
      cache: options.cache || 'force-cache',
      next: options.revalidate ? { revalidate: options.revalidate } : undefined
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    const lastModified = response.headers.get('last-modified') || undefined

    return {
      data,
      error: null,
      lastModified
    }
  } catch (error) {
    console.error(`Error fetching ${filename} from GitHub:`, error)
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * URLs de los archivos de datos en GitHub
 */
export const GITHUB_DATA_URLS = {
  projects: `${GITHUB_DATA_BASE_URL}/projects.json`,
  experience: `${GITHUB_DATA_BASE_URL}/experience.json`,
  education: `${GITHUB_DATA_BASE_URL}/education.json`,
  personal: `${GITHUB_DATA_BASE_URL}/personal.json`,
  techStack: `${GITHUB_DATA_BASE_URL}/tech-stack.json`,
  config: `${GITHUB_DATA_BASE_URL}/config.json`
} as const

/**
 * Función para verificar si los datos de GitHub están disponibles
 */
export async function checkGitHubDataAvailability(): Promise<{
  available: boolean
  errors: Record<string, string>
}> {
  const errors: Record<string, string> = {}
  let available = true

  for (const [key, url] of Object.entries(GITHUB_DATA_URLS)) {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      if (!response.ok) {
        errors[key] = `HTTP ${response.status}: ${response.statusText}`
        available = false
      }
    } catch (error) {
      errors[key] = error instanceof Error ? error.message : 'Unknown error'
      available = false
    }
  }

  return { available, errors }
}
