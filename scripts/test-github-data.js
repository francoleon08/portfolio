#!/usr/bin/env node

/**
 * Script para probar que los datos se cargan correctamente desde GitHub
 */

const GITHUB_DATA_URLS = {
  projects: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/projects.json',
  experience: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/experience.json',
  education: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/education.json',
  personal: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/personal.json',
  techStack: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/tech-stack.json',
  config: 'https://raw.githubusercontent.com/francoleon08/portfolio-data/main/config.json'
}

async function testGitHubData() {
  console.log('🧪 Probando carga de datos desde GitHub...\n')

  const results = {
    success: 0,
    failed: 0,
    errors: []
  }

  for (const [name, url] of Object.entries(GITHUB_DATA_URLS)) {
    try {
      console.log(`📡 Probando ${name}...`)
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Portfolio-Data-Tester/1.0'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Validar que el JSON es válido y tiene la estructura esperada
      if (typeof data === 'object' && data !== null) {
        console.log(`✅ ${name}: OK (${JSON.stringify(data).length} bytes)`)
        results.success++
      } else {
        throw new Error('Invalid JSON structure')
      }

    } catch (error) {
      console.log(`❌ ${name}: ERROR - ${error.message}`)
      results.failed++
      results.errors.push({ name, error: error.message })
    }
  }

  console.log('\n📊 Resultados:')
  console.log(`✅ Exitosos: ${results.success}`)
  console.log(`❌ Fallidos: ${results.failed}`)

  if (results.errors.length > 0) {
    console.log('\n🚨 Errores encontrados:')
    results.errors.forEach(({ name, error }) => {
      console.log(`  - ${name}: ${error}`)
    })
  }

  if (results.failed === 0) {
    console.log('\n🎉 ¡Todos los datos se cargan correctamente desde GitHub!')
    console.log('El sistema está listo para usar.')
  } else {
    console.log('\n⚠️  Algunos datos fallaron. Verifica que el repositorio esté configurado correctamente.')
  }

  return results.failed === 0
}

// Ejecutar si se llama directamente
if (require.main === module) {
  testGitHubData()
    .then(success => {
      process.exit(success ? 0 : 1)
    })
    .catch(error => {
      console.error('Error ejecutando test:', error)
      process.exit(1)
    })
}

module.exports = { testGitHubData, GITHUB_DATA_URLS }
