# Studiu Daniel - Estudio de Grabación

Sitio web profesional para un estudio de grabación y producción audiovisual dirigido por Daniel.

## 📋 Descripción

Página web moderna y responsiva que presenta los servicios de grabación, edición y producción. Incluye secciones de servicios, portfolio, estadísticas y contacto con interactividad mínima.

## 🎯 Características

- **Diseño responsivo** - Optimizado para móviles, tablets y desktops
- **Menú móvil** - Toggle de navegación para dispositivos pequeños
- **Reproductor de audio** - Demo de audio integrado con controles play/pause
- **Gradientes y efectos** - Fondo parallax fijo con tema oscuro
- **Variables CSS** - Colores y estilos centralizados para mantenimiento fácil

## 📁 Estructura de Archivos

```
studiudaniel/
├── index_Version3.html        # Estructura HTML principal
├── css_styles_Version4.css    # Estilos y diseño responsivo
├── js_main_Version3.js        # Interactividad (menú, audio, año actual)
└── README.md                   # Este archivo
```

## 🚀 Uso

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para fuentes de Google Fonts)
- Archivo `bg.jpg` para el fondo (ubicar en la raíz)
- Archivo de audio demo en `assets/demo.mp3`

### Instalación
1. Clona o descarga el repositorio
2. Abre `index_Version3.html` en tu navegador
3. Asegúrate de que `bg.jpg` y los archivos de audio estén en la ubicación correcta

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Gradientes, flexbox, media queries
- **JavaScript Vanilla** - Sin dependencias externas
- **Google Fonts** - Tipografía Inter

## 📱 Secciones

1. **Header** - Logo y menú de navegación
2. **Hero** - Presentación con biografía y CTA
3. **Servicios** - Tarjetas de servicios ofrecidos
4. **Portfolio** - Galería de proyectos
5. **Contacto** - Formulario y datos

## 🎨 Personalización

### Variables CSS principales
- `--accent`: Color principal (#6ee7b7)
- `--bg-gradient`: Gradiente de fondo
- `--card`: Color de tarjetas
- `--text`: Color del texto
- `--radius`: Radio de bordes

Edita estas variables en `css_styles_Version4.css` para cambiar el tema.

## 📝 Notas

- El JavaScript es minimalista: solo maneja menú móvil, audio y año dinámico
- El fondo usa `background-attachment: fixed` para efecto parallax (con fallback para iOS)
- Los idiomas usados son español, inglés y rumano

---

**Autor:** Daniel 
**Última actualización:** 2026
