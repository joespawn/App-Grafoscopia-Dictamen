# Dictamen Pericial Grafoscopía y Documentoscopía Forense

Aplicación integral para la elaboración, análisis técnico, cotejo morfológico y emisión de Dictámenes Periciales Judiciales en Grafoscopía y Documentoscopía.

## ⚖️ Características Principales
- **Estructura Forense Completa**: 16 secciones especializadas (Datos Generales, Proemio, Planteamiento del Problema, Elementos Técnicos, Leyes del Grafismo, Métodos y Técnicas, Análisis Grafocinético y Morfológico, Conclusiones y Anexos).
- **Copia y Exportación a Microsoft Word**:
  - Botón individual en cada página para copiar el contenido formateado al portapapeles listo para pegar en Word con tablas, tipografía legal y márgenes.
  - Opción de descarga directa en formato `.doc`.
  - Generación del Dictamen Completo consolidado.
- **Análisis Comparativo y Fotográfico**: Soporte para cotejo de firmas cuestionadas e indubitables con aumentos microscópicos.
- **Asistente Técnico**: Integración opcional de IA para perfeccionamiento de cláusulas técnicas y cotejo preliminar.

## 🚀 Despliegue en GitHub Pages
La aplicación está configurada para desplegarse automáticamente en GitHub Pages mediante GitHub Actions:
1. Al realizar `git push origin main`, el flujo de trabajo `.github/workflows/deploy.yml` compilará la aplicación y la publicará en GitHub Pages.
2. En GitHub: Ve a **Settings** -> **Pages** -> En **Build and deployment**, selecciona **Source: GitHub Actions**.

## 🛠️ Instalación y Uso Local
```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build
```
