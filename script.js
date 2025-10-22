// Simulate IoT sensor data
function updateData() {
  const temp = (25 + Math.random() * 5).toFixed(1);
  const humidity = (60 + Math.random() * 15).toFixed(1);
  const moisture = (40 + Math.random() * 30).toFixed(1);
  const light = (400 + Math.random() * 300).toFixed(0);

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";
  document.getElementById("moisture").innerText = moisture + " %";
  document.getElementById("light").innerText = light + " lux";
}

// Update every 2 seconds
setInterval(updateData, 2000);
updateData();

