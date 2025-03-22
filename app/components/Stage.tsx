"use client"
import { useState } from "react";

const Stage = () => {
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("tab1");

  // Lista de videos asociados a cada pestaña
  const videos = {
    tab1: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ejemplo de video 1
    tab2: "https://www.youtube.com/embed/6ZfuNTqbHE8", // Ejemplo de video 2
    tab3: "https://www.youtube.com/embed/YE7VzlLtp-4", // Ejemplo de video 3
  };

  return (
    <div className="bg-slate-950 p-5">
        <h3 className="text-center py-10 text-white text-3xl font-bold lg:text-4xl">Stages Light Projects of Blue Sea Lighting</h3>
      {/* Contenedor de las pestañas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-5">
        <div className="justify-center items-center my-auto">
            <div className="flex flex-col gap-5 mb-4">
            {/* Pestaña 1 */}
            <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            >
            Tab 1
            </button>

            {/* Pestaña 2 */}
            <button
            onClick={() => setActiveTab("tab2")}
            className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            >
            Tab 2
            </button>

            {/* Pestaña 3 */}
            <button
            onClick={() => setActiveTab("tab3")}
            className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === "tab3" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            >
            Tab 3
            </button>
            </div>
        </div>
        <div className="col-span-2">
            <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                src={videos[activeTab as keyof typeof videos]}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                ></iframe>
            </div>
        </div>
      </div>



    </div>
  );
};

export default Stage;