let home = 0;
let guest = 0;

// Elemente DOM salvate o singură dată (optimizează performanța)
const homeEl = document.getElementById("home-score");
const guestEl = document.getElementById("guest-score");

// Funcții pentru Echipa Gazdă (Home)
function plusOneHome() {
     home += 1;
     homeEl.textContent = home; 
    }
function plusTwoHome() { 
    home += 2;
    homeEl.textContent = home;
 }
function plusThreeHome() {
     home += 3; 
     homeEl.textContent = home; 
    } 
// Funcții pentru Echipa Oaspete (Guest)
function plusOneGuest()   { 
    guest += 1; 
    guestEl.textContent = guest;
 }

function plusTwoGuest()   { 
    guest += 2; 
    guestEl.textContent = guest;
 }

function plusThreeGuest() {
     guest += 3; 
     guestEl.textContent = guest; 
    }