// Array of tree data with name and scientific name
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
    scientificName: "Prosopis glandulosa"
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


// Function to display the trees as buttons with name and scientific name
function displayTrees() {
  const treeList = document.getElementById('tree-list');

  // Clear the list before adding new items (if any)
  treeList.innerHTML = '';

  //Sort in alphabetical order.
  trees.sort((a, b) => a.scientificName.localeCompare(b.scientificName));
  // Loop through the tree array and create a button for each tree
  trees.forEach((tree) => {
    // Create a button element for each tree
    const button = document.createElement('button');
    
    // Set the button text to be the name and scientific name of the tree
    button.textContent = `${tree.name} (Nombre científico: ${tree.scientificName})`;

    // Optionally, you can add a class to style the buttons
    button.classList.add('tree-button');

    // Add the button to the list
    treeList.appendChild(button);
  });
}

// Call displayTrees to show the data when the page loads
window.onload = displayTrees; // Ensure the function is called when the page is loaded
