const apiKeyCanva = 'TU_CLAVE_API_CANVA';

const createDesignInCanva = async (designContent) => {
  try {
    const response = await fetch('https://api.canva.com/v1/designs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKeyCanva}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: designContent,  // Contenido generado de ChatGPT
        template_id: 'EAGIAlA8TCA'  // ID del template que usaste en Canva
      }),
    });

    const data = await response.json();
    console.log('Diseño creado en Canva:', data);
  } catch (error) {
    console.error('Error al crear diseño en Canva:', error);
  }
};

// Ejemplo de cómo usar esta función
createDesignInCanva("Aquí va el contenido generado por ChatGPT");
