# Azurebill Mini Companion — v1.0.0

Aplicación web de acompañamiento para hábitos saludables, pausas activas, estudio y registro emocional. Interfaz en español, inglés y chino, con autenticación y persistencia mediante Supabase.

## Uso

La aplicación se publica como sitio web HTTPS. Para pruebas locales, servir la carpeta `movil/` con un servidor HTTP estático (por ejemplo, `python -m http.server 8000` desde esa carpeta) y abrir `http://localhost:8000`. Algunas funciones, como el service worker, necesitan un origen seguro o localhost. El acceso a Supabase requiere conexión y configuración del proyecto remoto.

## Estructura

- `movil/`: aplicación web, recursos, manifest y service worker.
- `tests/`: pruebas unitarias de funciones reales del frontend.
- `.github/workflows/ci.yml`: verificación de sintaxis, pruebas y empaquetado.

## Pruebas

Instalar Node.js 22 o superior y ejecutar `npm test` desde la raíz. No se requieren paquetes npm externos.

## Distribución

GitHub Actions genera el archivo `Azurebill-web-v1.0.0.zip` como artefacto descargable del workflow. Para una entrega pública permanente, adjuntarlo además a GitHub Releases, etiqueta `v1.0.0`. La versión web HTTPS sigue siendo el acceso principal.

## Seguridad

`movil/config.js` contiene únicamente la URL pública y una clave publishable de Supabase para el frontend; **nunca** subir `service_role`, contraseñas, secretos ni tokens privados. Las políticas RLS y validaciones críticas deben permanecer activas en Supabase. Los scripts SQL administrativos e históricos se han excluido de esta copia pública.

## Pendiente para la entrega

Añadir la URL real del sitio, el enlace del repositorio, capturas de GitHub Actions, acta de pruebas cruzadas y video explicativo. Estas pruebas automatizadas cubren funciones de utilidad del frontend, **no** demuestran por sí solas las restricciones de recompensas ni las reglas de seguridad de la base de datos.
