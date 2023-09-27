"use client";
import React from "react";

const Pregunta = ({ pregunta}) => {
    const { type, label, name, required, options } = pregunta;

    if (type === "select") {
        return (
            <div className="mb-3 d-flex">
                <label className="form-label">{label}</label>
                <select name={name} >
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
                    
                />
            </div>
        );
    }
};

export default Pregunta;
