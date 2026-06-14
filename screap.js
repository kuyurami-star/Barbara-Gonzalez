const Sebastian = document.getElementById(`userName`);
const elIntro = document.getElementById(`userIntro`); 
const elMeta = document.getElementById(`userGoal`);

const listaF = document.getElementById(`listaFortalezas`);
const listaO = document.getElementById(`listaOportunidades`); 
const listaD = document.getElementById(`listaDebilidades`);
const listaA = document.getElementById(`listaAmenazas`);

const elUniContrainer = document.getElementById(`uniContrainer`); 
const boton = document.getElementById(`btActualisar`);

function cargaPerfil() {                
    const datos = { 
        nombre: `Sebastian Godoy`,
        Introduccion: `Estudiante de 5to año enfocado en salir del colegio`,
        Meta: `Estudiante de 5to año enfocado en salir del colegio`,
        Fortalezas:[`Enfocado`, `Trabajador`, `Buen pensamiento critico`],
        Oportunidades:[`Tener apoyo de mi familia`, `contar con recursos necesarios`, `Tener familia enfodada en negocios`],
        Debilidades:[`Ser estresado`, `Peresoso`, `Flojo`],
        Amenasas:[`No ser insitente`, `No`, `Mal autocritica`],
        Universidades:[`UCAB`, `UNIVERSIDAD SANTA MARIA`, `UDO`],
    };

    Sebastian.innerText = datos.nombre;
    elIntro.innerText =  datos.Introduccion;
    elMeta.innerText = datos.meta;

}