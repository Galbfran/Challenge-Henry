"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

const TablaUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/usuario");
        console.log(response.data, "response");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      {data.map((item, index) => (
        <Accordion.Item eventKey={index} key={index} className="bg-dark text-light">
          <Accordion.Header>Nombre: {item.name} Email: {item.email}</Accordion.Header>
          <Accordion.Body>
            {item.encuestas.length > 0 ? (
              <ul>
                {item.encuestas.map((encuesta, encuestaIndex) => (
                  <li key={encuestaIndex}>
                    <strong>Encuesta {encuestaIndex + 1}:</strong>
                    <ul>
                      {Object.entries(encuesta).map(([pregunta, respuesta], preguntaIndex) => (
                        <li key={preguntaIndex}>
                          <strong>{pregunta}:</strong> {respuesta}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay encuestas disponibles.</p>
            )}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default TablaUser;

