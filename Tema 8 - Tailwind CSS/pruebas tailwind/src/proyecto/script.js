// 2 - Seleccionar los elementos del DOM que se van a utilizar
const themeToggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

// 4 - Función para cambiar el tema de la página usando la clase dark y los iconos de la luna y el sol
function toggleMode() {
  // Toggle icon Esto lo que hace es que mira la clase hidden de los iconos y si la tiene la quita y si no la tiene la pone
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  // Logo reference
  const logoElement = document.querySelector(".top-10.left-10");
  // If is set in localstorage
  if (localStorage.getItem("color-theme")) {
    // comprueba si hay clave color-theme en localstorage
    // Si es light en el localStorage, añadimos la clave dark  al HTML y guardamos en localstorage también dark para que si actulizo los datos tenga el tema dark guardado en localstorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      logoElement.classList.remove("bg-logo-light-mode");
      logoElement.classList.add("bg-logo-negro-mode");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      logoElement.classList.remove("bg-logo-negro-mode");
      logoElement.classList.add("bg-logo-light-mode");
    }
  } else {
    // Si no hay clave color-theme en localstorage, añadimos la clase dark al HTML y guardamos en localstorage dark. Recuerda que contains es un método que devuelve true o false si la clase está o no en el elemento
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      logoElement.classList.remove("bg-logo-negro-mode");
      logoElement.classList.add("bg-logo-light-mode");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      logoElement.classList.remove("bg-logo-light-mode");
      logoElement.classList.add("bg-logo-negro-mode");
    }
  }
}


// 3 - Función para verificar si el tema es dark o light y mostrar el icono correspondiente
function test() {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    // Asignamos a la etiqueta html la clase dark
    document.documentElement.classList.add("dark");
    // Mostramos el icono de la luna y ocultamos el icono del sol
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    // Asignamos a la etiqueta html la clase light eliminando la clase dark
    document.documentElement.classList.remove("dark");
    // Mostramos el icono del sol y ocultamos el icono de la luna
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}

// 5.- llamar a la función toggleMode cuando se haga click en el botón de cambio de tema
themeToggleBtn.addEventListener("click", toggleMode);

document.addEventListener("DOMContentLoaded", test); // 1 - Cuando se carga la página se ejecuta la función test para verificar si el tema es dark o light y mostrar el icono correspondiente
