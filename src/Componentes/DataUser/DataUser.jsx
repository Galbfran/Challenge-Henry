"use client";
import { useSession } from "next-auth/react";
import axios from "axios";

const DataUser = () => {
    const { data: session } = useSession();

    async function fetchData() {
        try {
            const response = await axios.post(`/api/usuario/`, {
                name: session?.user?.name,
                email: session?.user?.email,
                password: session?.user?.password || "123456", // Corregido el valor predeterminado de la contraseña
            });

            console.log("Usuario creado:", response.data);
        } catch (error) {
            console.error("Error al crear el usuario:", error);
        }
    }

    // Llama a la función fetchData cuando se renderiza el componente
    fetchData();

    return (
        <div>
            <h2>{session?.user?.name}</h2>
            <p>{session?.user?.email}</p>
        </div>
    );
};

export default DataUser;
