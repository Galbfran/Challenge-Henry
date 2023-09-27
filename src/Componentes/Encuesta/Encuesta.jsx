"use client";

import { useForm } from "react-hook-form";
import Pregunta from "./Pregunta";
const ModeloEncuesta = ({ encuesta }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        console.log(data);
    };

    return (
        <form className=" container" onSubmit={handleSubmit(onSubmit)}>
            {encuesta.map((pregunta, index) => <Pregunta key={index} pregunta={pregunta}/>)}
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default ModeloEncuesta;
