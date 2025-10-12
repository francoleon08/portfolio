#!/bin/bash

# Script para configurar el repositorio de datos en GitHub

echo "🚀 Configurando repositorio de datos en GitHub..."

# Cambiar al directorio de datos
cd /home/francoleon/Documentos/portfolio-data

# Verificar si ya existe un remote
if git remote get-url origin >/dev/null 2>&1; then
    echo "✅ El repositorio ya tiene un remote configurado"
    echo "Remote URL: $(git remote get-url origin)"
else
    echo "📝 Configurando remote de GitHub..."
    echo "Por favor, crea un repositorio llamado 'portfolio-data' en GitHub primero"
    echo "Luego ejecuta:"
    echo "  git remote add origin https://github.com/francoleon08/portfolio-data.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
fi

echo ""
echo "🔗 URLs de datos en GitHub:"
echo "  Projects: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/projects.json"
echo "  Experience: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/experience.json"
echo "  Education: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/education.json"
echo "  Personal: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/personal.json"
echo "  Tech Stack: https://raw.githubusercontent.com/francoleon08/portfolio-data/main/tech-stack.json"
echo ""
echo "✅ Configuración completada!"
