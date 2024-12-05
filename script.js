const menuItems = [
  { name: "Ejercicio 1", link: "Ejercicios/Ejercicio 1/index.html" },
  { name: "Ejercicio 2", link: "ejercicios/ejercicio 2/index.html" },
  { name: "Ejercicio 3", link: "ejercicios/ejercicio 3/Banreservas2/index.html" },
  { name: "Ejercicio 3", link: "ejercicios/ejercicio 3/ValidarCedula/index.html" },
  { name: "Ejercicio 5", link: "ejercicios/ejercicio 5/GenerarQR/index.html" },
  { name: "Ejercicio 5", link: "ejercicios/ejercicio 5/Graficos/index.html" },
  { name: "Ejercicio 5", link: "ejercicios/ejercicio 5/Multiplexpagina/index.html" },
  { name: "Ejercicio 7", link: "ejercicios/ejercicio 7/index.html" },
  { name: "Ejercicio 9", link: "ejercicios/ejercicio 9/index.html" },
 
  // Agrega más enlaces 
];

const menu = document.getElementById("dynamicMenu");
menu.innerHTML = menuItems
  .map(item => `<a href="${item.link}">${item.name}</a>`)
  .join("");
