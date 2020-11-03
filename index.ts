import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 8000;

// Serve static files from public -> served under static url
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.json({ test: 'test' }));

app.get('/test', (req, res) => res.send('Test'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
