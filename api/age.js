const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/age', (req, res) => {
  const { birthDate } = req.body;
  if (!birthDate) {
    return res.status(400).json({ error: 'birthDate is required' });
  }
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  res.json({ age });
});

module.exports = app;
