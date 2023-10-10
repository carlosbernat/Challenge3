import React, { useState } from 'react';

// Script hecho con ayuda de ChatGPT lanzandole los prompts del challenge en espanol y lanzando un segundo prompt que dice que haga uso del useState.

const ComponentApp = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(['first category', 'second category']);

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const onAddCategory = (event) => {
    event.preventDefault();

    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  return (
    <>
      <h1>GifExpert</h1>
      <form onSubmit={onAddCategory}>
        <input
          type="text"
          value={category}
          onChange={handleInputChange}
          placeholder="Escribe una categoría"
        />
        <button type="submit">Agregar Categoría</button>
      </form>
      <ol>
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default ComponentApp; 
