
let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('min');
let secondHand = document.getElementById('sec');

// Function to rotate clock hands
function rotateClockHands() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Calculate the rotation angle for each hand
  const hourRotation = (hours * 30) + (minutes / 2);
  const minuteRotation = (minutes * 6) + (seconds / 10);
  const secondRotation = seconds * 6;

  // Apply rotation to each hand
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update clock hands every second
setInterval(rotateClockHands, 1000);






