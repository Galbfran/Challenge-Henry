"use client";
import React, { useState } from 'react';
import axios from 'axios';

const CargaJson = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const fileContent = event.target.result;

        try {
          // Parsea el contenido del archivo como JSON
          const parsedData = JSON.parse(fileContent);

          // Aquí puedes realizar cualquier operación con parsedData
          console.log('Datos parseados del archivo:', parsedData);

          // Ahora, envía parsedData al servidor (puedes usar la ruta correcta para tu API)
          const response = await axios.post('/api/encuesta', parsedData, {
            headers: {
              'Content-Type': 'application/json', // Define el tipo de contenido como JSON
            },
          });

          console.log('Archivo cargado exitosamente:', response.data);
        } catch (error) {
          console.error('Error al cargar o parsear el archivo:', error);
        }
      };

      // Lee el contenido del archivo como texto
      reader.readAsText(selectedFile);
    } else {
      console.error('No se ha seleccionado ningún archivo.');
    }
  };

  return (
    <div>
      <input type="file" name="file" id="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Cargar JSON</button>
    </div>
  );
};

export default CargaJson;
