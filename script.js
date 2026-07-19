function guardarEnGoogleSheets() {
    // URL que copiaste en el Paso 3
    const urlScript = "https://script.google.com/macros/s/AKfycby1S783kCNPkBSxgJ2v7G1K3MjdME2tMEXhglI5IasZ8tNNXCK3HLY00qqRwyD7FxHqmg/exec";

    // Recopila las variables de tu evaluación
    const datosEvaluacion = {
        nombre: document.getElementById('nombre').value, // Asegúrate de tener este input
        puntaje: 90 // Aquí pones la variable que calcula tu evaluación
    };

    // Envío de datos mediante Fetch API
    fetch(urlScript, {
        method: 'POST',
        mode: 'no-cors', // Evita problemas de restricciones de seguridad del navegador
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosEvaluacion)
    })
    .then(() => {
        alert("¡Resultados guardados correctamente en Google Sheets!");
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert("Hubo un error al guardar.");
    });
}
