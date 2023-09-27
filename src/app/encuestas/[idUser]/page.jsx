import ModeloEncuesta from "@/Componentes/Encuesta/Encuesta"

const Encuesta = () => {
    const jsonData = [
        {
          type: "text",
          label: "Nombre completo",
          name: "full_name",
          required: true
        },
        {
          type: "tel",
          label: "Número de teléfono",
          name: "phone_number",
          required: true
        },
        {
          type: "date",
          label: "Fecha de inicio",
          name: "start_date",
          required: false
        },
        {
          type: "select",
          label: "¿Cuál es tu idioma preferido?",
          name: "preferred_language",
          options: [
            {
              label: "Inglés",
              value: "english"
            },
            {
              label: "Español",
              value: "spanish"
            },
            {
              label: "Francés",
              value: "french"
            },
            {
              label: "Alemán",
              value: "german"
            }
          ],
          required: true
        },
        {
          type: "radio",
          label: "¿Cómo nos encontraste?",
          name: "how_found",
          options: [
            {
              label: "Amigos",
              value: "friends"
            },
            {
              label: "Búsqueda en línea",
              value: "online_search"
            },
            {
              label: "Publicidad",
              value: "advertisement"
            }
          ],
          required: true
        },
        {
          type: "checkbox",
          label: "¿Desea recibir nuestro boletín informativo?",
          name: "newsletter_subscription",
          required: false
        },
        {
          type: "submit",
          label: "Enviar"
        }
      ];



    return (
        <article className="container bg-secondary  border shadow  rounded mt-3 mb-3 p-3">
            <h2>Encuesta:</h2>
            <div>
                <ModeloEncuesta encuesta={jsonData} />
            </div>
        </article>
    )
}

export default Encuesta