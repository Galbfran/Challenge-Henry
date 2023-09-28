import TablaEncuestas from "@/Componentes/TablaEncuestas/TablaEncuestas"
import DataUser from "@/Componentes/DataUser/DataUser"

const Perfil = () => {
    return (
        <article className="container  border shadow  rounded mt-3 mb-3 p-3">
            <div>
                <DataUser/>
            </div>
            <div>
                <h2>Encuestas </h2>
                <TablaEncuestas />
            </div>
        </article>
    )
}

export default Perfil