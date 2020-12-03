$(document).ready(
  function() {

//     milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// -------------------------------------FUNZIONI---------------

function print(array, container) {

  array.forEach(
    (element, index) => {

      const {name, prefix, family} = element;


      container.append(`
        <div>
          <i class= "${family} ${prefix}${name}"></i>
        </div>
        `);
});
}

function getTypes(array) {
const types = [];
  array.forEach(
    (element) => {
      if(types.includes(element.type) == false) {
        types.push(element.type);
      }
    }
  );
  return types;
}
// --------------------------------------------------------

const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "bus-alt",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "candy-cane",
        prefix: "fa-",
        type: "food",
        family: "fas"
      },
      {
        name: "pizza-slice",
        prefix: "fa-",
        type: "food",
        family: "fas"
      },
      {
        name: "hamburger",
        prefix: "fa-",
        type: "food",
        family: "fas"
      },
      {
        name: "egg",
        prefix: "fa-",
        type: "food",
        family: "fas"
      },
      {
        name: "cheese",
        prefix: "fa-",
        type: "food",
        family: "fas"
      },
    ];

    for (var key in icons) {
  console.log(icons[key].type);
  if (icons[key].type == "food") {
    console.log(icons[key].type == "food");
    // addClass('.red');

  }
  }



const container = $('.icons_box')

print(icons, container);

const types = getTypes(icons);
console.log(types);

    console.log(icons);

//     milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.


const arrayColor = ["blue", "red", "yellow", "orange"];
console.log(arrayColor);















  }
);
