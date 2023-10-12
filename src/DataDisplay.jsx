//CODIGO CREADO CON CHATGPT PIDIENDO AYUDA PARA EL USO DEL useFetch

import React from 'react';
import { useFetch } from './hooks/useFetch';

const DataDisplay = () => {
  const { data, isLoading, hasError } = useFetch();

  // Puedes manejar isLoading y hasError aquí según tus necesidades

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : hasError ? (
        <p>Error Challenge 6: {hasError.message}</p>
      ) : (
        <div>
          {/* Renderiza los datos obtenidos aquí */}
          <h1>Datos de la API de Giphy</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
