import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid"

export const GifApp = () => {
  
  const [categories, setCategories] = useState([""]);

  return (
    <div className="">
      <h2 className="text-center font-mono text-6xl ">GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifApp;
