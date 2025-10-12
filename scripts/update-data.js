#!/usr/bin/env node

/**
 * Script de ejemplo para actualizar los datos del portfolio
 * 
 * Uso:
 * node scripts/update-data.js
 * 
 * Este script demuestra cómo actualizar los archivos JSON de datos
 * sin necesidad de hacer rebuild del sitio web.
 */

const fs = require('fs');
const path = require('path');

// Función para leer un archivo JSON
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Función para escribir un archivo JSON
function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Updated ${filePath}`);
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error.message);
  }
}

// Función para agregar un nuevo proyecto
function addNewProject() {
  const projectsPath = path.join(__dirname, '..', 'data', 'projects.json');
  const projects = readJsonFile(projectsPath);
  
  if (!projects) return;

  const newProject = {
    id: 'nuevo-proyecto-' + Date.now(),
    title: 'Nuevo Proyecto',
    description: 'Este es un proyecto de ejemplo agregado dinámicamente.',
    stack: ['React', 'Node.js', 'MongoDB'],
    isPrivate: false,
    note: null,
    link: 'https://github.com/ejemplo/nuevo-proyecto',
    image: null,
    featured: false
  };

  projects.projects.push(newProject);
  writeJsonFile(projectsPath, projects);
}

// Función para actualizar información personal
function updatePersonalInfo() {
  const personalPath = path.join(__dirname, '..', 'data', 'personal.json');
  const personal = readJsonFile(personalPath);
  
  if (!personal) return;

  // Actualizar descripción
  personal.personal.description = 'Descripción actualizada dinámicamente - ' + new Date().toLocaleString();
  
  writeJsonFile(personalPath, personal);
}

// Función para agregar nueva experiencia
function addNewExperience() {
  const experiencePath = path.join(__dirname, '..', 'data', 'experience.json');
  const experience = readJsonFile(experiencePath);
  
  if (!experience) return;

  const newExperience = {
    id: 'nueva-experiencia-' + Date.now(),
    title: 'Nueva Experiencia',
    company: 'Empresa Ejemplo',
    period: '2024 - Presente',
    description: 'Experiencia agregada dinámicamente para demostrar el sistema.',
    responsibilities: [
      'Responsabilidad 1',
      'Responsabilidad 2',
      'Responsabilidad 3'
    ],
    type: 'professional',
    location: 'Remoto',
    technologies: ['JavaScript', 'React', 'Node.js']
  };

  experience.experiences.push(newExperience);
  writeJsonFile(experiencePath, experience);
}

// Función para actualizar tech stack
function updateTechStack() {
  const techStackPath = path.join(__dirname, '..', 'data', 'tech-stack.json');
  const techStack = readJsonFile(techStackPath);
  
  if (!techStack) return;

  // Agregar nueva tecnología
  if (!techStack.techStack.Frontend.includes('Vue.js')) {
    techStack.techStack.Frontend.push('Vue.js');
  }

  // Agregar nueva categoría
  if (!techStack.techStack['Mobile Development']) {
    techStack.techStack['Mobile Development'] = ['React Native', 'Flutter', 'Ionic'];
  }

  writeJsonFile(techStackPath, techStack);
}

// Función principal
function main() {
  console.log('🚀 Iniciando actualización de datos del portfolio...\n');

  // Ejecutar actualizaciones
  addNewProject();
  updatePersonalInfo();
  addNewExperience();
  updateTechStack();

  console.log('\n✨ Actualización completada!');
  console.log('Los cambios se reflejarán automáticamente en el sitio web.');
  console.log('No es necesario hacer rebuild o redeploy.');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main();
}

module.exports = {
  addNewProject,
  updatePersonalInfo,
  addNewExperience,
  updateTechStack
};
