const menuItems = [
  { name: "Ejercicio 1", link: "https://ignaciovargass.github.io/Etiquetas.io/" },
  { name: "Ejercicio 2", link: "ejercicios/ejercicio2/index.html" },
  // Agrega más enlaces según tus ejercicios
];

const menu = document.getElementById("dynamicMenu");
menu.innerHTML = menuItems
  .map(item => `<a href="${item.link}">${item.name}</a>`)
  .join("");
