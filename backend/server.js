
import { fileURLToPath } from 'url';
import path from 'path';

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001; // Ensure this port is different from the frontend port

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' // Only allow requests from this origin
}));
app.use(express.json());

app.get('/api', async (req, res) => {
  try {
    const response = await fetch('https://mempool.space/api/v1/lightning/nodes/countries');
    const data = await response.json();
    const modifiedData = data.map(item => ({
      ...item,
      capacity: item.capacity === null ? 0 : item.capacity >= 100000000 ? (item.capacity / 100000000).toFixed(2) : item.capacity,
      unit: item.capacity === null ? 'sats' : item.capacity >= 100000000 ? 'BTC' : 'sats'
    }));
    res.json(modifiedData);
 } catch (error) {
   console.error('Error fectching data:', error);
   res.status(500).json({ message: 'Server error' });
 }
});

// Serve any static files
app.use(express.static(path.join(__dirname, '../dist')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html')); // 根据实际路径调整
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
