"use client";
import React, { useState } from "react";

const Pregunta = ({ pregunta, onInputChange }) => {
    const { type, label, name, required, options } = pregunta;

    const handleInputChangeLocal = (e) => {
        const { name, value } = e.target;
        onInputChange(name, value); // Llama a la función proporcionada por el componente principal
    };

    if (type === "select") {
        return (
            <div className="mb-3 d-flex">
                <label className="form-label">{label}</label>
                <select name={name} onChange={handleInputChangeLocal}>
                    {options &&
                        options.map((opcion, index) => (
                            <option key={index} value={opcion.value}>
                                {opcion.label}
                            </option>
                        ))}
                </select>
            </div>
        );
    } else if (type === "radio") {
        return (
            <div className="mb-3 ">
                <label>{label}</label>
                {options &&
                    options.map((opcion, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name={name}
                                value={opcion.value}
                                onChange={handleInputChangeLocal}
                            />
                            <label>{opcion.label}</label>
                        </div>
                    ))}
            </div>
        );
    } else {
        return (
            <div className="mb-3 d-flex">
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    onChange={handleInputChangeLocal}
                />
            </div>
        );
    }
};

export default Pregunta;


