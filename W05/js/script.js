function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// special msg for mon and tues

  var currentDate = new Date();
  weekdayValue = currentDate.getDay();
if (weekdayValue == 1 || weekdayValue ==2){
  spclmsg = "🤝🏼Come join us for the chamber meet and greet on Conthsen 2 hours past sunset";
}
document.querySelector('#spclmsg').textContent = spclmsg;