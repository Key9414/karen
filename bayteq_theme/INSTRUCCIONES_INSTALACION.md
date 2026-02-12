# Instalación del Tema Bayteq - Drupal 11.1.7

## ⚠️ IMPORTANTE: Instalación Paso a Paso

Sigue estos pasos **exactamente** en orden para evitar problemas:

---

## Paso 1: Copiar el tema

```bash
# Desde el directorio raíz de Drupal
cd /path/to/drupal

# Crear carpeta de temas personalizados si no existe
mkdir -p web/themes/custom

# Copiar el tema
cp -r bayteq_theme web/themes/custom/
```

## Paso 2: Verificar permisos

```bash
# Dar permisos correctos
chmod -R 755 web/themes/custom/bayteq_theme
chown -R www-data:www-data web/themes/custom/bayteq_theme
```

(Ajusta `www-data` según tu configuración de servidor)

## Paso 3: Instalar el tema

### Opción A: Con Drush (Recomendado)

```bash
# Limpiar caché primero
drush cr

# Habilitar el tema
drush theme:enable bayteq_theme

# Establecer como tema predeterminado
drush config:set system.theme default bayteq_theme -y

# Limpiar caché nuevamente
drush cr
```

### Opción B: Desde la interfaz de Drupal

1. Ir a: **Administración** → **Apariencia** (`/admin/appearance`)
2. Buscar "Bayteq Developer Portal"
3. Click en **Instalar y establecer como predeterminado**
4. Limpiar caché: **Administración** → **Configuración** → **Desarrollo** → **Rendimiento** → **Limpiar todas las cachés**

## Paso 4: Configurar la página de inicio

```bash
# Establecer la home page
drush config:set system.site page.front /node -y

# O usar la ruta que prefieras
# drush config:set system.site page.front /home -y
```

## Paso 5: Verificar que funciona

1. **Visita la home:** `http://tu-sitio.com/`
2. **Deberías ver:**
   - Header con navegación
   - Hero section con fondo azul oscuro
   - Sección de estadísticas
   - Cards de acceso rápido
   - Footer

3. **Visita el login:** `http://tu-sitio.com/user/login`
   - Deberías ver el formulario centrado con el diseño Bayteq

## Paso 6: Agregar tu logo (Opcional)

### Método 1: Subir desde interfaz

1. Ir a: `/admin/appearance/settings/bayteq_theme`
2. En "Logo image", desmarcar "Use the logo supplied by the theme"
3. Subir tu logo
4. Guardar configuración

### Método 2: Reemplazar el archivo

```bash
# Copiar tu logo
cp /path/to/tu-logo.png web/themes/custom/bayteq_theme/logo.png

# Limpiar caché
drush cr
```

---

## Troubleshooting (Solución de Problemas)

### ❌ Problema: Página en blanco

**Causa común:** Errores en templates o caché

**Solución:**
```bash
# 1. Limpiar caché
drush cr

# 2. Verificar logs de errores
drush watchdog:show --count=20

# 3. Verificar que los archivos CSS existen
ls -la web/themes/custom/bayteq_theme/css/

# 4. Verificar permisos
chmod -R 755 web/themes/custom/bayteq_theme
```

### ❌ Problema: Estilos no se cargan

**Solución:**
```bash
# Limpiar caché de CSS y JS
drush cc css-js
drush cr

# Verificar que la librería se carga
drush eval "print_r(theme_get_setting('logo.url'));"
```

### ❌ Problema: Error 500

**Solución:**
```bash
# Ver errores de PHP
tail -f /var/log/apache2/error.log
# o
tail -f /var/log/nginx/error.log

# Ver watchdog de Drupal
drush watchdog:show --severity=Error
```

### ❌ Problema: El tema no aparece en la lista

**Solución:**
```bash
# Verificar que el archivo .info.yml es correcto
cat web/themes/custom/bayteq_theme/bayteq_theme.info.yml

# Reconstruir caché de temas
drush cr
drush theme:enable bayteq_theme
```

---

## Estructura Mínima del Tema

El tema ahora tiene una estructura simplificada y funcional:

```
bayteq_theme/
├── bayteq_theme.info.yml          # ✅ Configuración del tema
├── bayteq_theme.libraries.yml     # ✅ CSS y JS
├── bayteq_theme.theme             # ✅ Funciones PHP
├── css/
│   ├── theme.css                  # ✅ Variables del sistema de diseño
│   ├── base.css                   # ✅ Estilos base
│   ├── fonts.css                  # ✅ Fuentes Google
│   └── components/
│       ├── buttons.css
│       ├── forms.css
│       ├── cards.css
│       ├── navigation.css
│       └── footer.css
├── js/
│   └── global.js                  # ✅ JavaScript básico
└── templates/
    ├── page.html.twig             # ✅ Layout principal
    ├── page--front.html.twig      # ✅ Página de inicio
    └── page--user--login.html.twig # ✅ Página de login
```

---

## Verificación Final

Ejecuta estos comandos para verificar que todo está bien:

```bash
# 1. Verificar que el tema está habilitado
drush theme:list | grep bayteq

# Deberías ver algo como:
# bayteq_theme (Bayteq Developer Portal)  Enabled  Default

# 2. Verificar configuración del sitio
drush config:get system.theme default

# Deberías ver:
# 'system.theme:default': bayteq_theme

# 3. Limpiar toda la caché
drush cr

# 4. Verificar que no hay errores
drush watchdog:show --count=10
```

---

## Próximos Pasos

Una vez que el tema funciona correctamente:

1. **Crear contenido de prueba:**
   - Crear algunas páginas básicas
   - Probar el formulario de login

2. **Personalizar:**
   - Editar `css/theme.css` para cambiar colores
   - Modificar `templates/page--front.html.twig` para cambiar la home

3. **Agregar más páginas:**
   - Crear nodes de tipo "Page" o "Article"
   - El tema se aplicará automáticamente

---

## Soporte

Si sigues teniendo problemas después de seguir estos pasos:

1. **Revisa los logs:**
   ```bash
   drush watchdog:show --count=50
   ```

2. **Verifica la versión de Drupal:**
   ```bash
   drush status | grep "Drupal version"
   ```
   Debe ser 11.1.7 o superior.

3. **Desactiva otros temas/módulos que puedan interferir:**
   ```bash
   drush pml --status=enabled
   ```

---

## Comandos Útiles

```bash
# Ver todos los temas disponibles
drush theme:list

# Cambiar al tema Bayteq
drush config:set system.theme default bayteq_theme -y

# Cambiar temporalmente a otro tema (para debug)
drush config:set system.theme default claro -y

# Limpiar caché
drush cr

# Ver configuración actual
drush config:get system.theme

# Reconstruir permisos
drush rebuild
```

---

## Notas Importantes

- ✅ El tema **NO requiere** módulos adicionales para funcionar
- ✅ El tema **NO requiere** Composer para instalarse
- ✅ El tema usa solo **templates Twig estándar de Drupal**
- ✅ Todos los estilos usan **variables CSS** para fácil personalización
- ✅ El color rojo coral (#D14836) está aplicado en todos los CTAs principales

---

**Versión del tema:** 1.0.0  
**Compatible con:** Drupal 11.1.7+  
**Última actualización:** Febrero 2026
