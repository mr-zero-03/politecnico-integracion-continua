const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL Connection (it uses environment variables from the Docker Compose file)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connecting to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Index
app.get('/', (req, res) => {
  res.send('Hello World! Working! This is for Continuous Integration at the Politécnico Grancolombiano');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
