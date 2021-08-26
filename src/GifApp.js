import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory"
import { GifContainer } from "./Components/GifContainer";
import { GifGrid } from "./Components/GifGrid"


export const GifApp = () => {

  const [categories, setCategories] = useState([""]);
  const [limit, setLimit] = useState([]);
  return (
    <div className="h-screen bg-blue-900">
      <header>
        <div className="flex flex-row justify-center pt-3">
          <h1 className="text-center font-mono text-6xl font-semibold animate__animated animate__bounceInLeft animate__delay-1s">Gif</h1>
          <h1 className="text-center font-mono text-5xl mt-2 animate__animated animate__backInDown animate__delay-1s">mea</h1>
          <h1 className="text-center font-mono text-6xl font-semibold animate__animated animate__bounceInRight animate__delay-1s">Gift</h1>
        </div>
        <AddCategory setCategories={setCategories} setLimit={setLimit} />
      </header>
      <main className="bg-blue-900">
        <hr />
        <GifContainer category={categories} limit={limit}/>
      </main>
    </div>
  );
};

export default GifApp;
