# Backend - Juicio en el Caos

Backend para manejar el formulario de contacto del seminario.

## Setup Local

```bash
npm install
cp .env.example .env
# Editar .env con tus credenciales
npm run dev
```

## Deploy en Vercel

1. Push este código a GitHub
2. Conecta Vercel a tu repositorio
3. Añade las variables de entorno en Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD` (App Password de Gmail)
   - `EMAIL_PERSONAL`

## API

### POST /api/contacto

Recibe los datos del formulario y envía un email.

**Request:**
```json
{
  "nombre": "string",
  "email": "string",
  "mensaje": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensaje enviado exitosamente"
}
```
