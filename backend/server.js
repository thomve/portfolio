// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sample Data
const projects = [
  { id: 1, name: 'Data Science Dashboard' },
  { id: 2, name: 'AI Model Deployment' }
];

// API Endpoints
app.get('/projects', (req, res) => res.json(projects));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
