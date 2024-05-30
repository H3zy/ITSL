const btn = document.querySelector("#darkmode-btn");

// da prednost ručnímu výběru uživatele před preferencemi v systému
/* poznamka v pripade, ze uzivatel nemenil rucne theme, tak se bere podle 
systemu pres css @media prefers-color-scheme*/
var currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");
} else if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
}

// on click event pro zmenu dark modu
btn.addEventListener("click", function () {
  //zkontroluje jestli byl uz nekdy menen dark mode rucne
  if (currentTheme == null) {
    // pokud nebyl, zkontroluje jaky mode je nastaven v systemu
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  // zmeni aktualni theme na opacny 
  } else if (currentTheme == "dark") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }
  currentTheme = localStorage.getItem("theme");
});
