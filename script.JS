   /* ==========================================================================
           1. REFERENCIAS DE ELEMENTOS DEL DOM
           ========================================================================== */
           const elNombre = document.getElementById('userName');
           const elIntro = document.getElementById('userIntro');
           const elMeta = document.getElementById('userGoal');
   
           // Matrices de Listas FODA
           const listaF = document.getElementById('listFortalezas');
           const listaO = document.getElementById('listOportunidades');
           const listaD = document.getElementById('listDebilidades');
           const listaA = document.getElementById('listAmenazas');
   
           // Contenedores Nuevos
           const containerHabilidades = document.getElementById('containerHabilidades');
           const containerIdiomas = document.getElementById('containerIdiomas');
           const listCertificaciones = document.getElementById('listCertificaciones');
           const listLogros = document.getElementById('listLogros');
   
           // Universidades y Botón Actualizar
           const elUniContainer = document.getElementById('uniContainer');
           const botonCargar = document.getElementById('btnActualizar');
   
           // Elementos de la consola de eventos
           const cajaInteractiva = document.getElementById('interactiveBox');
           const logoColegio = document.getElementById('schoolLogo');
           const consola = document.getElementById('consoleScreen');
   
           /* ==========================================================================
              2. FUNCIÓN PARA LLENADO DINÁMICO DE INFORMACIÓN (CLIC PRINCIPAL)
              ========================================================================== */
           function cargarPerfilCompleto() {
               // Objeto de datos editable por el estudiante
               const datosEstudiante = {
                   nombre: "Bárbara Carlota González Vizcaíno",
                   introduccion: "Soy estudiante de 5to año de bachillerato en la U.E.C Eduardo Blanco. Me destaco por mi curiosidad, dedicacío.",
                   meta: " Graduarme y comenzar mis estudios como médico cirujano, con el fin de ejercer como cirujano plástico en mi propio consultorio ",
                   
                   // Análisis FODA
                   fortalezas: ["Disciplina y dedicacíon", "Curiosidad ", "Habilidades comunicativas", "Habilidades artísticas y manuales"],
                   oportunidades: ["Tener mi propio consultorio "],
                   debilidades: ["", "Detallismo excesivo (perfeccionismo)",""],
                   amenazas: ["Desgaste físico y emocional", "Situación país ", "Alta exigencia en filtros de ingreso universitario" ],
                  
              
                   
                   // Contenedores Complementarios
                   habilidadesTecnicas: [],
                   idiomas: ["Español (Nativo)", "Inglés (C1 - Avanzado)", "Francés (A2 - Inicial)"],
                   certificaciones: [
                       "Certificado C1 en Duolingo English Test (DET) (2024)",
                       "",
                       "o"
                   ],
                   logros: [
                       "Segundo lugar en concurso de oratoria (2024)",
                       "Delegado estudiantil del Comité de Ciencia y Tecnología",
                       "Capitana del equipo de debate de 5to año"
                   ],
                   
                   // Universidades
                   universidades: [ "UDO - Universidad de Oriente" ,"UCV - Central" ]
               };
   
               // Inserción de textos principales
               elNombre.innerText = datosEstudiante.nombre;
               elIntro.innerText = datosEstudiante.introduccion;
               elMeta.innerText = datosEstudiante.meta;
   
               // Función interna auxiliar para poblar listas simples (<ul>)
               const poblarListaHtml = (element, dataArray) => {
                   element.innerHTML = ""; // Limpiar relleno por defecto
                   dataArray.forEach(item => {
                       const li = document.createElement('li');
                       li.textContent = item;
                       element.appendChild(li);
                   });
               };
   
               // Poblar Listas FODA
               poblarListaHtml(listaF, datosEstudiante.fortalezas);
               poblarListaHtml(listaO, datosEstudiante.oportunidades);
               poblarListaHtml(listaD, datosEstudiante.debilidades);
               poblarListaHtml(listaA, datosEstudiante.amenazas);
   
               // Poblar Habilidades (Badges)
               containerHabilidades.innerHTML = "";
               datosEstudiante.habilidadesTecnicas.forEach(hab => {
                   const badge = document.createElement('span');
                   badge.className = "badge";
                   badge.textContent = hab;
                   containerHabilidades.appendChild(badge);
               });
   
               // Poblar Idiomas (Badges oscuros)
               containerIdiomas.innerHTML = "";
               datosEstudiante.idiomas.forEach(idioma => {
                   const badge = document.createElement('span');
                   badge.className = "badge";
                   badge.style.backgroundColor = "var(--azul-oscuro)";
                   badge.style.color = "var(--blanco)";
                   badge.textContent = idioma;
                   containerIdiomas.appendChild(badge);
               });
   
               // Poblar Certificaciones y Logros
               poblarListaHtml(listCertificaciones, datosEstudiante.certificaciones);
               poblarListaHtml(listLogros, datosEstudiante.logros);
   
               // Llenar universidades dinámicamente
               elUniContainer.innerHTML = "";
               datosEstudiante.universidades.forEach(uni => {
                   const div = document.createElement('div');
                   div.className = "uni-item";
                   div.textContent = uni;
                   
                   // Evento click individual para cada universidad
                   div.addEventListener('click', () => {
                       registrarLogEvento("click", `Seleccionó Universidad: ${uni}`);
                       div.style.backgroundColor = "var(--azul-primario)";
                       div.style.color = "var(--blanco)";
                   });
   
                   elUniContainer.appendChild(div);
               });
   
               registrarLogEvento("click", "¡Perfil Profesional completo cargado con éxito en el DOM!");
           }
   
   
           /* ==========================================================================
              3. ASIGNACIÓN DE EVENTOS SOLICITADOS
              ========================================================================== */
   
           // --- EVENTO 1: CLICK ---
           botonCargar.addEventListener('click', function() {
               cargarPerfilCompleto();
               registrarLogEvento('click', 'Presionó el botón principal para cargar datos.');
           });
   
           // --- EVENTO 2: MOUSEOVER (Entrada del mouse) ---
           cajaInteractiva.addEventListener('mouseover', function() {
               cajaInteractiva.style.backgroundColor = "#e53e3e"; // Cambia a rojo temporalmente
               cajaInteractiva.style.transform = "scale(1.03)";
               cajaInteractiva.innerText = "¡Puntero Adentro (mouseover)!";
               registrarLogEvento('mouseover', 'Puntero del mouse ingresó a la Zona de Pruebas');
           });
   
           // --- EVENTO 3: MOUSEOUT (Salida del mouse) ---
           cajaInteractiva.addEventListener('mouseout', function() {
               cajaInteractiva.style.backgroundColor = "var(--azul-primario)"; // Restaura el azul institucional
               cajaInteractiva.style.transform = "scale(1.0)";
               cajaInteractiva.innerText = "¡Interactúa Conmigo!";
               registrarLogEvento('mouseout', 'Puntero del mouse salió de la Zona de Pruebas');
           });
   
           /* ==========================================================================
              INTERACTIVIDAD COMPLEMENTARIA: LOGO DEL COLEGIO
              ========================================================================== */
           logoColegio.addEventListener('mouseover', () => {
               logoColegio.style.transform = "rotate(360deg) scale(1.1)";
               registrarLogEvento('mouseover', 'Animación rotación activada en el logo del Colegio');
           });
   
           logoColegio.addEventListener('mouseout', () => {
               logoColegio.style.transform = "rotate(0deg) scale(1.0)";
               registrarLogEvento('mouseout', 'El cursor del mouse abandonó el logo del Colegio');
           });