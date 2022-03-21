function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("ham").classList.toggle("open");
}

const x = document.getElementById("ham");
x.onclick = toggleMenu;