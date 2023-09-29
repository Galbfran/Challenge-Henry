"use client";
import { useState } from "react";
import Pregunta from "./Pregunta";
import { useSession } from "next-auth/react";
import axios from "axios";

const ModeloEncuesta = ({ encuesta }) => {
    const [formData, setFormData] = useState({});
    const { data: session } = useSession();

    // Función para manejar el envío del formulario
    const onSubmit = async (e) => {
        e.preventDefault();

        if (!session?.user?.email) {
            console.error("Correo electrónico de la sesión no disponible.");
            return;
        }

        try {
            // Aquí puedes hacer algo con los datos, por ejemplo, enviarlos a un servidor
        
            let dataSend = {
                encuestas: [formData]
            }
            console.log(dataSend)
            const response = await axios.put(`/api/usuario/${session.user.email}`, dataSend);
            console.log("Datos enviados:", formData);
            console.log("Respuesta del servidor:", response.data);
        } catch (error) {
            console.error("Error al enviar datos:", error);
        }
    };

    // Función para actualizar el estado cuando se cambian los campos
    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="container" onSubmit={onSubmit}>
            {encuesta.map((pregunta, index) => (
                <Pregunta key={index} pregunta={pregunta} onInputChange={handleInputChange} />
            ))}

        </form>
    );
};

export default ModeloEncuesta;
