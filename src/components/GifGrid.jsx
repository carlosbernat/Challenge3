import React, { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import getGifs from "../helpers/getGifs"; // Asegúrate de que la ruta de importación sea correcta

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async() => {
    const images = await getGifs (category)
    setImages (images);
  }

  useEffect( () => 
  {
    getImages();
  }, [])

  return (
    <>
      <h3> {category} </h3>
      <div  className = "card-grid">
        {

          images.map ( (image, key) => {
            return <GifItem key={key} {...image}></GifItem>
          })

        }

      </div>
    </>
  )
}
