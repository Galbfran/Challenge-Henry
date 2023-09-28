
import TablaEncuestas from "@/Componentes/TablaEncuestas/TablaEncuestas"
import TablaUser from "@/Componentes/TablaUser/TablaUser"

const AdminPage = () => {

    return (
        <article className="container  border shadow  rounded mt-3 mb-3 p-3">
            <div>
                <h3>Nombre: Pepe</h3>
                <p>Email: Pepe@gmail.com</p>
            </div>
            <div>
                <h2>Encuestas</h2>
                <TablaEncuestas />
            </div>
            <div>
                <h2>Usuarios</h2>
                <TablaUser />
            </div>
        </article>
    )
}

export default AdminPage