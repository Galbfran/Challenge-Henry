"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
const TablaEncuestas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/encuesta");
          setData(response.data);
        } catch (error) {
          console.error("Error al obtener datos de la encuesta:", error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Creada</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <th scope="row" ><Link className="btn btn-outline-secondary"  href={`/encuestas/${item._id}`}>{item._id}</Link></th>
            <td>{item.name}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEncuestas;
