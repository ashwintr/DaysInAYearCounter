
function calculateDaysLeft() {
  const today = new Date();
  const currentYear = today.getFullYear();
  document.getElementById('today').textContent = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const endOfYear = new Date(currentYear, 11, 31); // December 31st
  const daysLeft = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));
  
  document.getElementById('days').textContent = daysLeft;
  document.getElementById('currentYear').textContent = currentYear;
}

// Update initially and then every 24 hours
calculateDaysLeft();
setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
