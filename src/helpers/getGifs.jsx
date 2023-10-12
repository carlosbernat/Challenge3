const getGifs = async (category) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&limit=25&api_key=BCJ6UVHSA4zjsvfHoAPgXQ5AO5s4tAx3`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
        };
      });
      return gifs;
    } catch (error) {
      console.error("Error al obtener GIFs:", error);
      return [];
    }
  };
  
  export default getGifs;
  