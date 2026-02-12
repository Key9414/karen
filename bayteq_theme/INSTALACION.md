# Guía de Instalación - Bayteq Developer Portal Theme

## Requisitos Previos

- Drupal 11.1.7 instalado y funcionando
- Acceso SSH al servidor
- Composer instalado
- Drush 12 o superior

## Paso 1: Preparar el entorno

### Verificar versión de Drupal
```bash
drush status | grep "Drupal version"
```

Debe mostrar: `Drupal version : 11.1.7` o superior

## Paso 2: Instalar el tema

### Opción A: Instalación manual

1. **Copiar el tema al directorio de temas personalizados:**
```bash
cd /path/to/drupal
mkdir -p web/themes/custom
cp -r bayteq_theme web/themes/custom/
```

2. **Verificar permisos:**
```bash
chmod -R 755 web/themes/custom/bayteq_theme
chown -R www-data:www-data web/themes/custom/bayteq_theme
```

3. **Habilitar el tema:**
```bash
drush theme:enable bayteq_theme
drush config:set system.theme default bayteq_theme -y
```

### Opción B: Instalación con Git (recomendado para desarrollo)

1. **Clonar desde repositorio:**
```bash
cd /path/to/drupal/web/themes/custom
git clone [URL_REPOSITORIO] bayteq_theme
```

2. **Habilitar el tema:**
```bash
cd ../../..
drush theme:enable bayteq_theme
drush config:set system.theme default bayteq_theme -y
```

## Paso 3: Configurar el logo

1. **Copiar el logo de Bayteq:**
```bash
mkdir -p web/themes/custom/bayteq_theme/images
cp /path/to/bayteq-logo.png web/themes/custom/bayteq_theme/images/
```

2. **O configurar desde la interfaz:**
   - Ir a: `/admin/appearance/settings/bayteq_theme`
   - Subir logo en la sección "Logo image"
   - Guardar configuración

## Paso 4: Configurar regiones del tema

El tema utiliza las siguientes regiones:

- `header` - Navegación principal
- `content` - Contenido principal
- `sidebar_first` - Sidebar izquierdo (filtros, navegación)
- `footer` - Footer del sitio

### Asignar bloques a regiones:

1. **Ir a:** `/admin/structure/block`
2. **Asignar bloques necesarios:**
   - Sistema de branding → `header`
   - Menú principal → `header`
   - Contenido principal → `content`
   - Footer → `footer`

## Paso 5: Configurar menús

### Crear menú principal:

1. **Ir a:** `/admin/structure/menu/manage/main`
2. **Agregar enlaces:**
   - Inicio → `/home`
   - Catálogo de APIs → `/apis`
   - Documentación → `/docs`
   - Crear App → `/create-app`
   - Estado del Sistema → `/system-status`

## Paso 6: Limpiar caché

```bash
drush cr
```

## Paso 7: Verificar instalación

1. **Visitar la home:** `https://tu-dominio.com/`
2. **Verificar que se carga correctamente**
3. **Revisar consola del navegador** (F12) para errores

## Configuración Adicional

### A. Configurar página de inicio

```bash
drush config:set system.site page.front /home -y
```

O desde la interfaz:
- `/admin/config/system/site-information`
- Cambiar "Default front page" a `/home`

### B. Configurar página de login

La plantilla `page--user--login.html.twig` se aplicará automáticamente a `/user/login`

### C. Configurar permisos de usuario

1. **Ir a:** `/admin/people/permissions`
2. **Configurar permisos** según necesidades del portal

### D. Habilitar módulos necesarios (opcional)

Para funcionalidad completa del portal:

```bash
# Módulos básicos
drush en views views_ui -y
drush en menu_ui menu_link_content -y
drush en block block_content -y

# Módulos de API (si se usan)
drush en rest restui jsonapi -y

# Limpiar caché
drush cr
```

## Personalización Post-Instalación

### 1. Ajustar colores del branding

Editar: `web/themes/custom/bayteq_theme/css/theme.css`

```css
:root {
  --accent-red: rgba(209, 72, 54, 1.00);  /* Rojo coral Bayteq */
  --primary: rgba(35, 63, 80, 1.00);      /* Azul oscuro */
  /* Modificar según necesidad */
}
```

### 2. Crear páginas personalizadas

#### Crear nodo de tipo "Página Básica":
```bash
drush generate content:node
```

#### O desde la interfaz:
- `/node/add/page`
- Asignar URL alias en "URL path settings"

### 3. Configurar breadcrumbs (migas de pan)

El tema incluye soporte para breadcrumbs. Para habilitarlos:

```bash
drush en easy_breadcrumb -y
drush cr
```

## Troubleshooting

### Problema: El tema no se aplica

**Solución:**
```bash
drush cr
drush theme:enable bayteq_theme
drush config:set system.theme default bayteq_theme -y
drush cr
```

### Problema: Estilos CSS no se cargan

**Solución:**
```bash
# Verificar permisos
chmod -R 755 web/themes/custom/bayteq_theme/css

# Limpiar caché de CSS
drush cc css-js
drush cr
```

### Problema: Logo no aparece

**Solución:**
1. Verificar ruta del logo en: `/admin/appearance/settings/bayteq_theme`
2. O verificar que existe: `web/themes/custom/bayteq_theme/images/bayteq-logo.png`

### Problema: JavaScript no funciona

**Solución:**
```bash
# Verificar que jQuery está habilitado
drush en jquery_ui -y
drush cr
```

### Problema: Página 404 en rutas personalizadas

**Solución:**
```bash
# Limpiar caché de rutas
drush cr
drush router:rebuild
```

## Integración con IBM API Connect

### Paso 1: Instalar módulos de API Connect

Seguir la documentación oficial de IBM API Connect para Drupal:
https://www.ibm.com/docs/en/api-connect/

### Paso 2: Configurar endpoints

1. Ir a configuración de API Connect
2. Ingresar credenciales del API Manager
3. Sincronizar catálogo de APIs

### Paso 3: Personalizar plantillas de API

El tema incluye plantillas base que se pueden extender:
- `templates/page--api-catalog.html.twig`
- `templates/page--api-detail.html.twig` (crear según necesidad)

## Mantenimiento

### Actualizar el tema

```bash
cd web/themes/custom/bayteq_theme
git pull origin main  # Si usas Git
drush cr
```

### Backup del tema

```bash
cd web/themes/custom
tar -czf bayteq_theme_backup_$(date +%Y%m%d).tar.gz bayteq_theme/
```

## Recursos

- [Documentación de Drupal 11](https://www.drupal.org/docs/11)
- [IBM API Connect Documentation](https://www.ibm.com/docs/en/api-connect/)
- [Twig Template Documentation](https://twig.symfony.com/doc/)

## Soporte

Para soporte técnico:
- Email: soporte@bayteq.com
- Slack: #bayteq-dev-portal
- Wiki interno: [URL]
