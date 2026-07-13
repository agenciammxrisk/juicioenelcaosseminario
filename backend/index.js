const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Endpoint para recibir mensajes del formulario
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Validar
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Campos requeridos' });
  }

  try {
    // Enviar a tu correo personal
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_PERSONAL,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Responde a: ${email}</em></p>
      `,
      replyTo: email,
    });

    res.json({ success: true, message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
