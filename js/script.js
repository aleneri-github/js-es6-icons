$(document).ready(
  function() {

// -------------------------------------FUNZIONI---------------

function print(array, container) {

  container.html('');

  array.forEach(
    (element, index) => {

      const {name, prefix, family, color} = element;


      container.append(`
        <div>
          <i class= "${family} ${prefix}${name}" style="color:${color}"></i>
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

function addColorIcon(iconsArray, colorsArray, typesArray) {

  console.log(colorsArray);
  console.log(typesArray);

  const newArray = iconsArray.map(
    (element) => {
      const typeIndex = typesArray.indexOf(element.type);
      console.log(element.type, typeIndex);

      const color = colorsArray[typeIndex];


      const newElement = {
        ...element,

        color: color
      };
      return newElement;
    }
  );
return newArray;
}

function printOptions(select, types) {

  types.forEach(
    (element) => {
      select.append(`
        <option value ="${element}">${element}</option>`);
    }
  )

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


    const arrayColor = ["dodgerblue", "red", "lime", "orange"];



const container = $('.icons_box')


const types = getTypes(icons);


const colorIcons = addColorIcon(icons, arrayColor, types );
console.log(colorIcons);

print(colorIcons, container);

const select = $("#type");
printOptions(select, types);

select.change(
  function() {
    const selectType = $(this).val();
    if (selectType == "") {
      print(colorIcons, container);
    } else {
      const filteredIcons = colorIcons.filter(
        (element) => {
          return element.type == selectType;
        }
      );
      print(filteredIcons, container)
    }
  }
);
  }
);
