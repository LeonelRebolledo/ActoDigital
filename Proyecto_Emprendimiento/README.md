# Proyecto Emprendimiento

Base institucional y comercial para una empresa que ofrece:

- Venta de aplicaciones web
- Desarrollo web
- APIs e integraciones
- Reparacion en linea de software y mesa de ayuda

## Estructura

- `index.html`: landing estatica visible tambien al abrir el archivo directamente en el navegador.
- `src/data/siteContent.js`: contenido editable centralizado para marca, navegacion, servicios, socios, telefonos, WhatsApp y textos.
- `src/scripts/renderers.js`: renderizado modular de secciones para la variante dinamica del sitio.
- `src/scripts/enhance.js`: animaciones de entrada y parallax suave del hero.
- `src/styles/main.css`: sistema visual y responsive.
- `public/assets/team/`: fotos procesadas del equipo listas para usar en la landing.
- `public/assets/content/`: ilustraciones y recursos institucionales auxiliares.
- `ImageFunder/`: fotos originales provistas para el equipo.
- `tools/process_team_photos.py`: script para regenerar las versiones adaptadas de las fotos sin retoque con IA.
- `server.cjs`: servidor local sin dependencias externas.
- `start-local.ps1`: arranque rapido en PowerShell.

## Fotos del equipo

- Originales: `C:\Proyecto_Emprendimiento\ImageFunder`
- Derivados finales: `C:\Proyecto_Emprendimiento\public\assets\team`

Archivos generados:

- `public/assets/team/leonel-rebolledo.png`
- `public/assets/team/leonel-rebolledo-round.png`
- `public/assets/team/alfredo-silva.png`
- `public/assets/team/alfredo-silva-round.png`

## Regla de edicion de imagenes

Las fotos del equipo no deben ser retocadas con IA generativa. Solo se permite:

- recorte
- ajuste de encuadre
- exportacion PNG
- mascara circular
- fondo transparente si corresponde
- dimensionado proporcional

No se deben modificar rostros, expresiones, ropa ni rasgos personales.

## Regenerar fotos del equipo

Con el runtime de Python incluido en este entorno:

```powershell
& "C:\Users\Rejede\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" .\tools\process_team_photos.py
```

## Como correr el proyecto

Desde `C:\Proyecto_Emprendimiento`:

```powershell
.\start-local.ps1
```

Luego abrir:

```text
http://localhost:4173
```

## Que editar primero

1. Ajustar datos editables en `src/data/siteContent.js`.
2. Cambiar logo si ya cuentan con identidad final.
3. Sustituir mockups o ilustraciones por material comercial propio cuando lo tengan.
4. Actualizar correo, ubicacion y futuros enlaces comerciales desde el mismo archivo de contenido.
