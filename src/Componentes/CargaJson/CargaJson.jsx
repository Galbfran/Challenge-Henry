"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CargaJson = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Envía el archivo al servidor (puedes usar la ruta correcta para tu API)
        const response = await axios.post('/api/encuesta', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Archivo cargado exitosamente:', response.data);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
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
