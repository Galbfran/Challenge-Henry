"use client";
import ModeloEncuesta from "@/Componentes/Encuesta/Encuesta";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter , useParams } from "next/navigation";

const Encuesta = () => {
  let router = useRouter(); // Obtiene el objeto router
  const params = useParams()
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Obtiene el valor de la ruta desde router.query

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/encuesta/${params.idUser}`);
        setData(response.data.encuestas);
      } catch (error) {
        console.error("Error al obtener datos de la encuesta:", error);
      }
    };


      // Verifica que idUser tenga un valor antes de hacer la solicitud
      fetchData();
  
  }, []); // Agrega router.query como dependencia

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

