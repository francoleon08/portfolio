# Portfolio personal

Este es el código fuente de mi portfolio personal, desarrollado con [Astro](https://astro.build). El sitio muestra mis habilidades, proyectos y formas de contacto.

![Imagen del Portfolio](assets/web.png)

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás los siguientes directorios y archivos:

```text
├── assets/
├── src/
│   ├── components/
│   │   ├── AboutMe.astro
│   │   ├── ContactButton.astro
│   │   ├── ContactSection.astro
│   │   ├── Details.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── SkillCards.astro
│   │   └── project-section/
│   │       ├── ProjectCard.astro
│   │       └── ProjectSection.astro
│   ├── data/
│   │   ├── projects.json
│   │   └── skills.json
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio de producción en `./dist/`    |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando el Astro CLI                  |

## 📁 Estructura de Componentes

- **AboutMe.astro**: Muestra información sobre mí.
- **ContactButton.astro**: Botón para la sección de contacto.
- **ContactSection.astro**: Sección de contacto.
- **Details.astro**: Sección de detalles personales.
- **Footer.astro**: Pie de página.
- **Header.astro**: Encabezado del sitio.
- **SkillCards.astro**: Tarjetas de habilidades.
- **project-section/**: Contiene componentes relacionados con los proyectos:
  - **ProjectCard.astro**: Tarjeta individual de proyecto.
  - **ProjectSection.astro**: Sección que agrupa todas las tarjetas de proyectos.

## 📄 Datos

- **projects.json**: Datos de los proyectos.
- **skills.json**: Datos de las habilidades.

## 🌐 Despliegue

Este proyecto está configurado para ser desplegado en Vercel usando el adaptador de Astro para Vercel.
