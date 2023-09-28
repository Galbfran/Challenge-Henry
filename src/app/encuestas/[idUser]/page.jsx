"use client";
import ModeloEncuesta from "@/Componentes/Encuesta/Encuesta";
import axios from "axios";
import { useEffect, useState } from "react";

const Encuesta = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/encuesta/6514bd712a82f1c6358643f3");
        setData(response.data.encuestas);
      } catch (error) {
        console.error("Error al obtener datos de la encuesta:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <article className="container bg-secondary border shadow rounded mt-3 mb-3 p-3">
      <h2>Encuesta:</h2>
      <div>
        <ModeloEncuesta encuesta={data} />
      </div>
    </article>
  );
};

export default Encuesta;
