
# Componente Media Player en React

Un reproductor multimedia minimalista, inspirado en Apple, construido con React y Tailwind CSS. Este componente ofrece una interfaz moderna y elegante para reproducir archivos de audio y video con controles personalizados.

## ✨ Características

- 🎬 Reproduce tanto audio como video
- 🎛️ Controles personalizados, minimalistas e inspirados en el diseño de Apple
- 🔊 Ajuste de volumen con retroalimentación visual
- ⏱️ Barra de progreso con funcionalidad de búsqueda
- 📱 Diseño completamente responsive
- ✨ Animaciones y transiciones elegantes
- 🎨 Estética moderna y limpia

## 🛠 Tecnologías Utilizadas

- React
- Tailwind CSS
- Lucide React (para íconos)
- Vite (como herramienta de build)

## 🚀 Instalación

### Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

### Configuración

1. Clona el repositorio o crea un nuevo proyecto de React:

```bash
# Crear un nuevo proyecto con Vite
npm create vite@latest media-player-app -- --template react

# Navegar al directorio del proyecto
cd media-player-app
```

2. Instala las dependencias necesarias:

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npx tailwindcss init -p
```

3. Configura Tailwind CSS actualizando el archivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Agrega las directivas de Tailwind a tu archivo `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Copia el componente `MediaPlayer.jsx` a la carpeta `components` de tu proyecto.

## 📦 Uso

Importa y utiliza el componente `MediaPlayer` en tu aplicación React:

```jsx
import MediaPlayer from './components/MediaPlayer';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-light mb-6">Demo del Reproductor Multimedia</h1>
      
      {/* Reproductor de video */}
      <MediaPlayer 
        type="video" 
        src="/ruta/a/tu-video.mp4" 
        title="Título del Video" 
      />
      
      {/* Reproductor de audio */}
      <MediaPlayer 
        type="audio" 
        src="/ruta/a/tu-audio.mp3" 
        title="Título del Audio" 
      />
    </div>
  );
}

export default App;
```

### Props

El componente `MediaPlayer` acepta las siguientes propiedades:

| Prop     | Tipo     | Descripción                              | Requerido |
|----------|----------|------------------------------------------|-----------|
| `type`   | string   | Tipo de medio: `"audio"` o `"video"`     | Sí        |
| `src`    | string   | URL o ruta al archivo multimedia          | Sí        |
| `title`  | string   | Título a mostrar                         | No (por defecto: "Media file") |

## 📁 Estructura del Proyecto

```plaintext
media-player-app/
├── public/
│   └── (archivos multimedia)
├── src/
│   ├── components/
│   │   └── MediaPlayer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Estilo

El componente utiliza Tailwind CSS. Puedes personalizar su apariencia modificando las clases de Tailwind en el componente.

Ejemplo: para cambiar el color de la barra de progreso:

```jsx
{/* Barra de progreso */}
<div ref={progressBarRef} className="h-1 bg-gray-200 rounded-full mt-5 cursor-pointer relative" onClick={seek}>
  <div
    className="h-full bg-red-500 rounded-full transition-all duration-300" // Cambia bg-gray-800 por bg-red-500
    style={{ width: `${(currentTime / duration) * 100}%` }}
  ></div>
</div>
```

### Añadir funcionalidades

Puedes extender el componente con nuevas características como:

- Control de velocidad de reproducción
- Selección de calidad para videos
- Funcionalidad de listas de reproducción
- Modo de pantalla completa
- Soporte para subtítulos

## 🌐 Compatibilidad con Navegadores

Compatible con todos los navegadores modernos que soporten elementos HTML5 de audio y video:

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## 📢 Atribución de Medios

Si usas archivos multimedia, asegúrate de tener los derechos correspondientes y brindar la atribución adecuada:

```jsx
<footer className="mt-8 text-center text-gray-400 text-xs">
  <p>Atribución de Medios:</p>
  <p>"Video de Ejemplo" por Nombre del Creador - <a href="https://example.com" className="underline">fuente</a></p>
</footer>
```

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de enviar un Pull Request.

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 🙌 Agradecimientos

- Íconos proporcionados por [Lucide React](https://lucide.dev/)
- Archivos multimedia de ejemplo de [SoundHelix](https://www.soundhelix.com) y [Blender Foundation](https://peach.blender.org)

---

Creado con ❤️ por Pau Cano
