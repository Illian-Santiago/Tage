let array = [];
const url = 'http://tage.test/api/antes';
const token = sessionStorage.getItem('apiToken');

export default function obtenerDatosAntes() {
  const tempAmb = document.getElementById('tempAmbiente').value;
  const tempComp = document.getElementById('tempCompostera').value;
  const nivLLeno = document.getElementById('nivelLlenado').value;
  const olor = document.getElementById('olor').value;
  const insectos = document.getElementById('insectos').value;
  const humedad = document.getElementById('humedad').value;
  const observaciones = document.getElementById('observacionesAntes').value;

  if (olor == 'Otro' && insectos == 'Otro' && humedad == 'Otro') {
    const textOlor = document.getElementById('textOlor').value;
    const textInsectos = document.getElementById('textInsectos').value;
    const textHumedad = document.getElementById('textHumedad').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: textOlor, insectos: insectos, otroInsecto: textInsectos, humedad: humedad, otroHumedad: textHumedad, foto: null, observaciones: observaciones }];

  } else if (insectos == 'Otro' && humedad == 'Otro') {
    const textInsectos = document.getElementById('textInsectos').value;
    const textHumedad = document.getElementById('textHumedad').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: null, insectos: insectos, otroInsecto: textInsectos, humedad: humedad, otroHumedad: textHumedad, foto: null, observaciones: observaciones }];

  } else if (olor == 'Otro' && humedad == 'Otro') {
    const textOlor = document.getElementById('textOlor').value;
    const textHumedad = document.getElementById('textHumedad').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: textOlor, insectos: insectos, otroInsecto: null, humedad: humedad, otroHumedad: textHumedad, foto: null, observaciones: observaciones }];

  } else if (olor == 'Otro' && insectos == 'Otro') {
    const textOlor = document.getElementById('textOlor').value;
    const textInsectos = document.getElementById('textInsectos').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: textOlor, insectos: insectos, otroInsecto: textInsectos, humedad: humedad, otroHumedad: null, foto: null, observaciones: observaciones }];

  } else if (olor == 'Otro') {
    const textOlor = document.getElementById('textOlor').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: textOlor, insectos: insectos, otroInsecto: null, humedad: humedad, otroHumedad: null, foto: null, observaciones: observaciones }];

  } else if (insectos == 'Otro') {
    const textInsectos = document.getElementById('textInsectos').value;
    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: null, insectos: insectos, otroInsecto: textInsectos, humedad: humedad, otroHumedad: null, foto: null, observaciones: observaciones }];

  } else if (humedad == 'Otro') {
    const textHumedad = document.getElementById('textHumedad').value;

    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: null, insectos: insectos, otroInsecto: null, humedad: humedad, otroHumedad: textHumedad, foto: null, observaciones: observaciones }];

  } else {
    array = [{registro_id: 2, tempAmbiente: tempAmb, tempCompostera: tempComp, nivelLLenado: nivLLeno, olor: olor, otroOlor: null, insectos: insectos, otroInsecto: null, humedad: humedad, otroHumedad: null, foto: null, observaciones: observaciones }];

  }

  console.log(array[0])
}

export default async function uploadArray() {
  console.log(array)
  try {
    const response = await fetch(url, {
      method: 'POST', // Usamos POST para enviar datos
      headers: {
        'Authorization': `Bearer ${token}`, // Autenticación con el token
        'Content-Type': 'application/json', // Indicamos que el cuerpo de la solicitud es JSON
      },
      body: JSON.stringify(array[0]), // Convertimos el array en JSON para enviarlo
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Errores devueltos por el servidor:', errorData);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Respuesta del servidor:', result);
  } catch (error) {
    console.error('Error al subir los datos:', error);
  }
}