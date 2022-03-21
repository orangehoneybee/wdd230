
const options = {weekday: 'long' , day: 'numeric', month: 'long', year: 'numeric'};
const year = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', year);
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

// special msg for mon and tues

const d = new Date();
const dayOfWeek = d.getDay()
let spclmsg;
if (dayOfWeek === 1 || dayOfWeek === 2) {
    spclmsg = "🤝🏼Come join us for the chamber meet and greet Wednesday at 7:00pm";
}
document.querySelector('#spclmsgr').textContent = spclmsg;