function updateData() {
  const temp = (25 + Math.random() * 5).toFixed(1);
  const humidity = (60 + Math.random() * 15).toFixed(1);
  const moisture = (40 + Math.random() * 30).toFixed(1);

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("humidity").innerText = humidity + " %";
  document.getElementById("moisture").innerText = moisture + " %";
}

// Update every 3 seconds
setInterval(updateData, 3000);
updateData();
