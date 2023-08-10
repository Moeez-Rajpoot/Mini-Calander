let d = new Date();
const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let mon = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
day.innerText = arr[d.getDay()-1]; 
date.innerText = d.getDate();
month.innerText = mon[d.getMonth()];
year.innerText = d.getFullYear();


function updateTimeRemaining() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeDiff = tomorrow - now;
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  
    document.getElementById('h').textContent = hours.toString().padStart(2, '0');
    document.getElementById('m').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('s').textContent = seconds.toString().padStart(2, '0');
  }
  
  updateTimeRemaining();
  setInterval(updateTimeRemaining, 1000);
  