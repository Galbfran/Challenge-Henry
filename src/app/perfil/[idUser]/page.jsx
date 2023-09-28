import TablaEncuestas from "@/Componentes/TablaEncuestas/TablaEncuestas"


const Perfil = () => {
    return (
        <article className="container  border shadow  rounded mt-3 mb-3 p-3">
            <div>
                <h3>Nombre: Pepe</h3>
                <p>Email: Pepe@gmail.com</p>
            </div>
            <div>
                <h2>Encuestas </h2>
                <TablaEncuestas />
            </div>
        </article>
    )
}

export default Perfil