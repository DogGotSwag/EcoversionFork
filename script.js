//Array de datos con la info de cada árbol.
const trees = [
  { 
    name: "Encino blanco", 
    scientificName: "Quercus arizonica"
  },
  { 
    name: "Pino de Durango", 
    scientificName: "Pinus durangensis"
  },
  { 
    name: "Encino gris", 
    scientificName: "Quercus grisea"
  },
  { 
    name: "Sabino", 
    scientificName: "Juniperus deppeana"
  },
  { 
    name: "Pino piñonero", 
    scientificName: "Pinus cembroides"
  },
  { 
    name: "Mezquite Dulce", 
    scientificName: "Prosopis glandulosa",
    
    info: "Árbol nativo del norte de Mexico y suroeste de Estados Unidos. Llega a alcanzar alturas de entre 5 a 9 metros de altura. Resistente a las sequias y heladas. Produce un fruto en forma de vaina",   
    flor: "Primavera y espontaneamene en verano y otoño.",
    distribución: "Sonora, Chihuahua, Durango, Coahuila, Nuevo León, Tamaulipas, San Luis Potosí.",
    usos: "Árbol de sombra, se utiliza las vainas para hacer una harina libre de gluten, nitrogernar el suelo, madera usada para asar carne."
  },
  { 
    name: "Mimbre del desierto", 
    scientificName: "Chilopsis linearis"
  },
  {
    name: "Acacia Uña de Gato",
    scientificName: "Acacia greggii"
  },
  {
    name: "Huizache",
    scientificName: "Acacia farnesiana"
  },
  {
    name: "Vara prieta",
    scientificName: "Acacia constricta"
  },
  {
    name: "Palo blanco",
    scientificName: "Celtis reticulata"
  },
  {
    name: "Jaboncillo",
    scientificName: "Sapindus saponaria"
  }
];

// Lógica compartida para la lista y los detalles de los árboles
// Esta función se ejecuta cuando el DOM está completamente cargado.
// Lógica compartida para la lista y los detalles de los árboles
// Esta función se ejecuta cuando el DOM está completamente cargado.
document.addEventListener("DOMContentLoaded", () => {
  const treeList = document.getElementById('tree-list'); // Contenedor de la lista de árboles.
  const treeDetail = document.getElementById('tree-detail'); // Contenedor de los detalles del árbol.

  // Si la página contiene el contenedor de lista, genera los botones de los árboles.
  if (treeList) {
    displayTrees(treeList); // Llama a la función para mostrar la lista de árboles.
  }

  // Si la página contiene el contenedor de detalles, muestra la información del árbol.
  if (treeDetail) {
    showTreeDetails(treeDetail); // Llama a la función para mostrar los detalles del árbol seleccionado.
  }
});

// Función para mostrar la lista de árboles como botones
function displayTrees(treeList) {
  treeList.innerHTML = ''; // Limpia el contenido previo del contenedor.

  // Ordena los árboles por nombre científico (alfabéticamente).
  trees.sort((a, b) => a.scientificName.localeCompare(b.scientificName));

  // Recorre la lista de árboles y crea un botón para cada uno.
  trees.forEach((tree) => {
    const button = document.createElement('button');
    
    // Set the button text to be the name and scientific name of the tree
    // Generar botones con el nombre y nombre científico de cada árbol
    button.textContent = tree.name + " (Nombre científico: " + tree.scientificName + ")";

    
    button.classList.add('tree-button'); // Añade una clase CSS para estilizar el botón.

    // Agrega un evento que redirige a la página de detalles al hacer clic.
    button.addEventListener('click', () => {
      // Redirige a `detalle_arbol.html` con el nombre del árbol como parámetro en la URL.
      window.location.href = `detalle_arbol.html?tree=${encodeURIComponent(tree.name)}`;
    });

    // Añade el botón al contenedor de la lista.
    treeList.appendChild(button);
  });
}

// Función para mostrar los detalles de un árbol en `detalle_arbol.html`
function showTreeDetails(treeDetail) {
  // Obtiene el parámetro 'tree' de la URL para identificar el árbol seleccionado.
  const urlParams = new URLSearchParams(window.location.search);
  const treeName = urlParams.get('tree'); // Nombre del árbol seleccionado.

  // Busca en la lista de árboles el objeto que coincide con el nombre seleccionado.
  const tree = trees.find(t => t.name === treeName);

  if (tree) {
    // Si el árbol es encontrado, actualiza el contenido del contenedor con su información.
    treeDetail.innerHTML = `
      <h2>${tree.name}</h2> <!-- Nombre común del árbol -->
      <p><strong>Nombre científico:</strong> ${tree.scientificName}</p> <!-- Nombre científico -->
      <p>${tree.info}</p> <!-- Descripción -->
      <img src="${tree.image}" alt="${tree.name}" style="max-width:100%; height:auto;"> <!-- Imagen -->
    `;
  } else {
    // Si no se encuentra el árbol, muestra un mensaje de error.
    treeDetail.innerHTML = '<h1>Árbol no encontrado</h1>';
  }
}
