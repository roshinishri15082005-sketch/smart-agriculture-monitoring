/* 🌤 Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", Arial, sans-serif;
  background: linear-gradient(135deg, #e7d459, #ee855c, #6979e1); /* Sky blue gradient */
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

/* ☁ Header section */
header {
  background: #0288d1; /* Blue header */
  color: white;
  text-align: center;
  padding: 2em 1em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

header h1 {
  font-size: 2.2em;
  margin-bottom: 0.3em;
  letter-spacing: 1px;
}

header p {
  font-size: 1em;
  opacity: 0.9;
}

/* 🌾 Main area */
main {
  flex: 1;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 🌤 Data cards */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8em;
  width: 90%;
  max-width: 1000px;
  margin-top: 2em;
}

.card {
  background: rgba(104, 232, 110, 0.95);
  border-radius: 15px;
  padding: 1.8em;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card h2 {
  color: #0288d1;
  margin-bottom: 0.8em;
}

.card p {
  font-size: 1.8em;
  font-weight: bold;
  color: #0288d1;
}

/* 🌦 Info section */
.info {
  background: rgba(50, 221, 213, 0.9);
  border-radius: 12px;
  padding: 2em;
  width: 90%;
  max-width: 900px;
  margin: 2.5em auto;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info h2 {
  margin-bottom: 0.8em;
  color: #0288d1;
  font-size: 1.5em;
}

.info p {
  line-height: 1.6;
  color: #333;
}

/* 🌈 Footer */
footer {
  background: #0288d1;
  color: rgb(98, 234, 234);
  text-align: center;
  padding: 1.2em 0;
  font-size: 0.95em;
  letter-spacing: 0.5px;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
}
