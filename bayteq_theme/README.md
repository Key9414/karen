# Bayteq Developer Portal - Tema Drupal 11.1.7

Tema personalizado para el Portal de Desarrolladores de Bayteq basado en IBM API Connect/Drupal.

---

## 🚀 Instalación Rápida

```bash
# 1. Copiar tema
cp -r bayteq_theme /path/to/drupal/web/themes/custom/

# 2. Habilitar tema
cd /path/to/drupal
drush cr
drush theme:enable bayteq_theme
drush config:set system.theme default bayteq_theme -y
drush cr

# 3. Visitar el sitio
# http://tu-sitio.com/
```

**📖 Ver guía completa:** `INSTRUCCIONES_INSTALACION.md`

---

## ✅ Características

- ✅ **Variables CSS del sistema de diseño Bayteq** (colores, tipografía, radios)
- ✅ **Color rojo coral (#D14836)** en todos los CTAs principales
- ✅ **Tipografías:** Source Sans Pro y Oswald
- ✅ **Responsive:** Desktop, tablet y móvil
- ✅ **Sin dependencias:** No requiere módulos adicionales
- ✅ **Páginas incluidas:**
  - ✅ Login/Access (página de inicio de sesión personalizada)
  - ✅ Home (página principal del portal)
  - ✅ Layout base (aplicable a todas las páginas)

---

## 📁 Estructura

```
bayteq_theme/
├── css/
│   ├── theme.css              # Variables CSS del sistema Bayteq
│   ├── base.css               # Estilos base
│   ├── fonts.css              # Fuentes Google
│   └── components/            # Componentes (botones, forms, cards, etc.)
├── js/
│   └── global.js              # JavaScript global
├── templates/
│   ├── page.html.twig         # Layout principal
│   ├── page--front.html.twig  # Home del portal
│   └── page--user--login.html.twig  # Login
└── bayteq_theme.info.yml      # Configuración del tema
```

---

## 🎨 Variables CSS

Todas las variables del sistema de diseño Bayteq están en `css/theme.css`:

### Tipografía
```css
--font-family-source: 'Source Sans Pro', sans-serif;
--font-family-oswald: 'Oswald', sans-serif;
--text-h1: 36px;
--text-h2: 24px;
--text-base: 14px;
```

### Colores
```css
--primary: rgba(35, 63, 80, 1.00);        /* Azul oscuro */
--accent-red: rgba(209, 72, 54, 1.00);    /* Rojo coral Bayteq */
--muted: rgba(241, 245, 249, 1.00);       /* Gris claro */
```

### Radios
```css
--radius: 8px;
--radius-button: 16px;
--radius-card: 16px;
```

**Para personalizar:** Edita `css/theme.css` y todos los estilos se actualizarán automáticamente.

---

## 🎯 Clases CSS Útiles

### Botones
```html
<a href="#" class="btn btn-primary">Botón Principal</a>
<a href="#" class="btn btn-secondary">Botón Secundario</a>
```

### Formularios
```html
<div class="form-group">
  <label class="form-label">Etiqueta</label>
  <input type="text" class="form-control" placeholder="Texto">
</div>
```

### Tarjetas
```html
<div class="card">
  <h3 class="card-title">Título</h3>
  <p class="card-text">Contenido</p>
</div>

<div class="card card-hover">
  <!-- Card con efecto hover -->
</div>
```

---

## 🛠️ Personalización

### Cambiar colores

Edita `css/theme.css`:

```css
:root {
  --accent-red: rgba(209, 72, 54, 1.00);  /* Tu color */
  --primary: rgba(35, 63, 80, 1.00);      /* Tu color */
}
```

Luego limpia caché: `drush cr`

### Modificar la página de inicio

Edita `templates/page--front.html.twig` y personaliza el contenido.

### Agregar tu logo

**Opción 1:** Interfaz de Drupal
- Ir a `/admin/appearance/settings/bayteq_theme`
- Subir logo
- Guardar

**Opción 2:** Reemplazar archivo
```bash
cp tu-logo.png web/themes/custom/bayteq_theme/logo.png
drush cr
```

---

## 📋 Requisitos

- Drupal 11.1.7 o superior
- PHP 8.1 o superior
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## ⚠️ Troubleshooting

### Página en blanco después de instalar

```bash
# Limpiar caché
drush cr

# Ver errores
drush watchdog:show --count=20

# Verificar permisos
chmod -R 755 web/themes/custom/bayteq_theme
```

### Estilos no se cargan

```bash
# Limpiar caché de CSS
drush cc css-js
drush cr

# Verificar que los archivos CSS existen
ls -la web/themes/custom/bayteq_theme/css/
```

**Ver más soluciones:** `INSTRUCCIONES_INSTALACION.md`

---

## 📚 Documentación

- **`INSTRUCCIONES_INSTALACION.md`** - Guía paso a paso completa
- **`CONVERSION_DRUPAL.md`** - Detalles de la conversión React → Drupal

---

## 🎨 Color de Acento Rojo Coral

El color `#D14836` (rojo coral de Bayteq) se aplica en:

- ✅ Botones primarios (`.btn-primary`)
- ✅ Enlaces activos en navegación
- ✅ CTAs principales
- ✅ Highlights en títulos
- ✅ Hover states

---

## 📞 Soporte

- Email: soporte@bayteq.com
- Documentación: Ver archivos `.md` en este directorio

---

## 📄 Licencia

© 2026 Bayteq. Todos los derechos reservados.

---

## 🔄 Changelog

### v1.0.0 - Febrero 2026
- ✅ Lanzamiento inicial del tema
- ✅ Sistema de diseño completo con variables CSS
- ✅ Página de Login personalizada
- ✅ Página Home del portal
- ✅ Layout responsive
- ✅ Componentes reutilizables

---

**Compatible con Drupal 11.1.7+**
