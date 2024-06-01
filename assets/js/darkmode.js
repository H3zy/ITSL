//selektor pro tlacitko
const btn = document.querySelector("#darkmode-btn");

// selektory pro ikony
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// da prednost ručnímu výběru uživatele před preferencemi v systému
/* poznamka v pripade, ze uzivatel nemenil rucne theme, tak se bere podle 
systemu pres css @media prefers-color-scheme*/
var currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  darkIcon.setAttribute("display", "inline-block");
  document.body.classList.remove("light-theme");
  lightIcon.setAttribute("display", "none");
} else if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  lightIcon.setAttribute("display", "inline-block");
  document.body.classList.remove("dark-theme");
  darkIcon.setAttribute("display", "none");
}

// on click event pro zmenu dark modu
btn.addEventListener("click", function () {
  //zkontroluje jestli byl uz nekdy menen dark mode rucne
  if (currentTheme == null) {
    // pokud nebyl, zkontroluje jaky mode je nastaven v systemu
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.remove("dark-theme");
      darkIcon.setAttribute("display", "none");
      document.body.classList.add("light-theme");
      lightIcon.setAttribute("display", "inline-block");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      lightIcon.setAttribute("display", "none");
      document.body.classList.add("dark-theme");
      darkIcon.setAttribute("display", "inline-block");
      localStorage.setItem("theme", "dark");
    }
    // zmeni aktualni theme na opacny
  } else if (currentTheme == "dark") {
    document.body.classList.add("light-theme");
    lightIcon.setAttribute("display", "inline-block");
    document.body.classList.remove("dark-theme");
    darkIcon.setAttribute("display", "none");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    darkIcon.setAttribute("display", "inline-block");
    document.body.classList.remove("light-theme");
    lightIcon.setAttribute("display", "none");
    localStorage.setItem("theme", "dark");
  }
  currentTheme = localStorage.getItem("theme");
});
