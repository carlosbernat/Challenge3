// CODIGO CREADO POR CHATGPT PIDIENDO AYUDA SOBRE COMO IMPLEMENTAR MI API DE GIPHY EN ESTE NUEVO COMPONENTE, PIDIENDO TAMBIEN MUESTRA DE MENSAJES DE ERROR EN CASO DE HABERLOS
// PARA VERIFICAR LA FUNCIONALIDAD

import { useState, useEffect } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.giphy.com/v1/gifs/search/tags';
    const apiKey = 'https://api.giphy.com/v1/gifs/search/tags?api_key=BCJ6UVHSA4zjsvfHoAPgXQ5AO5s4tAx3&q=&limit=25&offset=0';
    const url = `${apiUrl}?api_key=${apiKey}&q=&limit=25&offset=0`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
        setHasError(null);
      } catch (error) {
        setIsLoading(false);
        setHasError(error);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    hasError,
  };
};
