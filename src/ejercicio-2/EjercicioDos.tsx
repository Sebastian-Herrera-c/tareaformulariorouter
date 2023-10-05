import React from 'react';
import { ListaNombres } from './ListaNombres'; 

const EjercicioDos = () => {
  const listaNombres: string[] = ['Juan', 'Lili', 'Cristina', 'Julian', 'Amanda'];
  
  return (
    <>
      <h2>Ejercicio Dos</h2>
      <div>
        <ListaNombres nombres={listaNombres} />
      </div>
    </>
  );
}

export default EjercicioDos;
