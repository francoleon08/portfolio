# Gestión de Datos Dinámicos del Portfolio

Este documento explica cómo funciona el sistema de datos dinámicos implementado en el portfolio, que permite actualizar el contenido sin necesidad de hacer rebuild y redeploy.

## Arquitectura del Sistema

Los datos están almacenados en un **repositorio separado en GitHub** y se obtienen dinámicamente:

- **Repositorio de Datos**: `https://github.com/francoleon08/portfolio-data`
- **Repositorio Principal**: `https://github.com/francoleon08/portfolio` (este repositorio)

## Estructura de Archivos

Los datos están organizados en archivos JSON en el repositorio separado:

```
portfolio-data/ (repositorio separado)
├── projects.json      # Información de proyectos
├── experience.json    # Experiencia laboral
├── education.json     # Educación y formación
├── personal.json      # Información personal
├── tech-stack.json   # Tecnologías y habilidades
└── config.json       # Configuración del sistema
```

## Archivos de Datos

### 1. projects.json
Contiene información de todos los proyectos del portfolio:
- `id`: Identificador único del proyecto
- `title`: Título del proyecto
- `description`: Descripción detallada
- `stack`: Array de tecnologías utilizadas
- `isPrivate`: Si el repositorio es privado
- `note`: Nota adicional (opcional)
- `link`: URL del proyecto (opcional)
- `image`: Imagen del proyecto (opcional)
- `featured`: Si es un proyecto destacado

### 2. experience.json
Contiene la experiencia laboral y académica:
- `id`: Identificador único
- `title`: Título del puesto
- `company`: Empresa o institución
- `period`: Período de trabajo
- `description`: Descripción del rol
- `responsibilities`: Array de responsabilidades
- `type`: Tipo (professional/academic)
- `location`: Ubicación
- `technologies`: Tecnologías utilizadas

### 3. education.json
Contiene información educativa:
- `id`: Identificador único
- `title`: Título de la formación
- `institution`: Institución educativa
- `degree`: Grado o certificación
- `period`: Período de estudio
- `progress`: Porcentaje completado
- `description`: Descripción adicional
- `location`: Ubicación
- `status`: Estado (completed/en_progress/active)
- `gpa`: Promedio (opcional)
- `relevant_courses`: Cursos relevantes (opcional)
- `responsibilities`: Responsabilidades (opcional)

### 4. personal.json
Contiene información personal y de contacto:
- `name`: Nombre completo
- `title`: Título profesional
- `subtitle`: Subtítulo
- `description`: Descripción breve
- `about`: Descripción detallada
- `location`: Ubicación
- `email`: Email de contacto
- `phone`: Teléfono (opcional)
- `website`: Sitio web personal (opcional)
- `social`: Redes sociales
- `resume`: Ruta al CV
- `profile_image`: Imagen de perfil
- `cover_image`: Imagen de portada (opcional)

### 5. tech-stack.json
Contiene las tecnologías y habilidades:
- `techStack`: Objeto con categorías de tecnologías
- `skills`: Objeto con diferentes tipos de habilidades

## URLs de Datos en GitHub

Los datos están disponibles públicamente en GitHub:

- **Projects**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/projects.json
- **Experience**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/experience.json
- **Education**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/education.json
- **Personal**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/personal.json
- **Tech Stack**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/tech-stack.json
- **Config**: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/config.json

## API Endpoints

El sistema incluye endpoints de API que obtienen datos desde GitHub:

- `GET /api/data/projects` - Obtener proyectos (desde GitHub)
- `GET /api/data/experience` - Obtener experiencia (desde GitHub)
- `GET /api/data/education` - Obtener educación (desde GitHub)
- `GET /api/data/personal` - Obtener información personal (desde GitHub)
- `GET /api/data/tech-stack` - Obtener tecnologías (desde GitHub)

## Hooks de React

Se han creado hooks personalizados para facilitar el uso de los datos:

- `usePortfolioData()` - Obtiene todos los datos
- `useProjects()` - Obtiene solo proyectos
- `useExperience()` - Obtiene solo experiencia
- `useEducation()` - Obtiene solo educación
- `usePersonal()` - Obtiene solo información personal
- `useTechStack()` - Obtiene solo tecnologías

## Cómo Actualizar los Datos

### 1. Actualización Manual
1. Ve al repositorio de datos: `https://github.com/francoleon08/portfolio-data`
2. Edita los archivos JSON directamente en GitHub
3. Haz commit y push de los cambios
4. Los cambios se reflejarán automáticamente en el sitio web (sin redeploy)

### 2. Actualización Local
1. Clona el repositorio de datos: `git clone https://github.com/francoleon08/portfolio-data.git`
2. Edita los archivos JSON localmente
3. Haz commit y push: `git add . && git commit -m "Update data" && git push`
4. Los cambios se reflejarán automáticamente

### 3. Actualización Programática
Puedes crear scripts para actualizar los datos programáticamente:

```javascript
// Ejemplo de actualización de un proyecto
const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, 'portfolio-data', 'projects.json');
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

// Agregar nuevo proyecto
projects.projects.push({
  id: 'nuevo-proyecto',
  title: 'Nuevo Proyecto',
  description: 'Descripción del nuevo proyecto',
  stack: ['React', 'Node.js'],
  isPrivate: false,
  featured: true
});

// Guardar cambios
fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));

// Hacer commit y push
const { execSync } = require('child_process');
execSync('cd portfolio-data && git add . && git commit -m "Add new project" && git push');
```

### 4. Scripts Disponibles
- `npm run test-github-data` - Probar que los datos se cargan desde GitHub
- `npm run setup-github-data` - Configurar el repositorio de datos
- `npm run update-data` - Actualizar datos localmente (requiere repositorio clonado)

### 5. Integración con CMS
Puedes integrar el sistema con un CMS que haga commits automáticos al repositorio de datos.

## Ventajas del Sistema

1. **Sin Rebuild**: Los cambios se reflejan inmediatamente sin necesidad de rebuild
2. **Sin Redeploy**: No es necesario hacer redeploy del sitio principal
3. **Repositorio Separado**: Los datos están en un repositorio independiente
4. **Flexibilidad**: Fácil de mantener y actualizar desde GitHub
5. **Escalabilidad**: Fácil agregar nuevos tipos de datos
6. **Separación de Responsabilidades**: Los datos están completamente separados del código
7. **Versionado Independiente**: Los datos pueden ser versionados independientemente
8. **Acceso Público**: Los datos están disponibles públicamente en GitHub
9. **Fallback Automático**: Si la API local falla, se obtienen datos directamente de GitHub
10. **Cache Inteligente**: Sistema de cache para optimizar rendimiento

## Consideraciones de Seguridad

- Los archivos JSON son de solo lectura para los usuarios finales
- Los endpoints de API son de solo lectura
- Para actualizaciones, considera implementar autenticación y validación
- Mantén backups de los archivos de datos

## Próximos Pasos

1. Implementar validación de esquemas JSON
2. Agregar sistema de cache para mejorar rendimiento
3. Crear interfaz de administración para editar datos
4. Implementar sistema de versionado de datos
5. Agregar soporte para múltiples idiomas en los datos
