"use client";
import { useState } from "react";

import Pregunta from "./Pregunta";
const ModeloEncuesta = ({ encuesta }) => {
    const [formData, setFormData] = useState({});

    // Función para manejar el envío del formulario
    const onSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los datos, por ejemplo, enviarlos a un servidor
        console.log("Datos enviados:", formData);
    };

    // Función para actualizar el estado cuando se cambian los campos
    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
        <form className=" container " onSubmit={onSubmit}>
            {encuesta.map((pregunta, index) => <Pregunta key={index} pregunta={pregunta} onInputChange={handleInputChange} />)}
        </form>
    );
};

export default ModeloEncuesta;
