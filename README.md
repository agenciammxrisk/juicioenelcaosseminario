# juicioenelcaosseminario
Sitio privado de Juicio en el Caos — seminario ejecutivo de decisión bajo incertidumbre. Estático, GitHub Pages → dominio propio.
# Juicio en el Caos — Sitio

Sitio estático, GitHub Pages (temporal) → juicioenelcaos.com (destino final).

## Diseño — no negociable
- Fondo claro o carbón (#1F1F1F), acento único dorado (#8A6D3B), texto
  secundario gris (#555555). Sin gradientes, sin stock, sin iconografía
  genérica de startup.
- Serif con carácter en titulares, sans-serif neutra en cuerpo. Una sola
  columna de lectura, mucho blanco. Se lee como documento, no como landing.
- Tono: invitación privada / despacho serio. Cero animaciones llamativas,
  cero urgencia artificial, cero lenguaje motivacional en microcopy.

## Páginas
1. `index.html` — folleto (texto ya redactado, no generar de más)
2. `arquitectura.html` — formato del fin de semana + transformaciones
   SOLO por nombre y una frase (sin guion operativo) + formulario de
   contacto conectado al Worker existente de Cloudflare
3. `facilitador.html` — CV / trayectoria
4. `libro.html` — el libro, sinopsis + enlaces de compra

## Reglas de contenido
- No inventar cifras, testimonios, ni contenido del guion operativo.
- Placeholder explícito (`<!-- TODO: texto pendiente -->`) donde falte
  contenido — nunca relleno genérico.
- Formulario de contacto → Worker existente, no backend nuevo.

## Stack
HTML/CSS/JS plano. Sin frameworks pesados. Comentado para mantenimiento
propio sin depender de un dev.
