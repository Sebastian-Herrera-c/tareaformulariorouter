
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const FormularioContacto: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form style={{backgroundColor:'green',}} onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        </div>
        <Button style={{backgroundColor:'white'}} type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default FormularioContacto;
