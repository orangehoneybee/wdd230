function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const options = {weekday: 'long' , day: 'numeric', month: 'long', year: 'numeric'};
const year = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', year);
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

 function toggleMenu() {
   document.getElementById("primaryNav").classList.toggle("open");
   document.getElementById("ham").classList.toggle("open");
}

const x = document.getElementById("ham");
x.onclick = toggleMenu;

// special msg for mon and tues

  var currentDate = new Date();
  weekdayValue = currentDate.getDay();
if (weekdayValue == 1 || weekdayValue ==2){
  spclmsg = "🤝🏼Come join us for the chamber meet and greet on Conthsen 2 hours past sunset";
}
document.querySelector('#spclmsg').textContent = spclmsg;