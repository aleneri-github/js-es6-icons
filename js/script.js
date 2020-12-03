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

const container = $('.icons_box')

print(icons, container);

    console.log(icons);















  }
);
