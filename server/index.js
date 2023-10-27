import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import './db/server.js';
import eingabeRouter from './routes/eingabeRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); // Enable Cross-Origin-Resource Sharing
app.use(express.json()); // Parse incomming requests with JSON payloads

//Routes
app.get('/', (req, res, next) => {
  res.send('Hello WW!');
});
app.use('/Eingabe', eingabeRouter); // Example

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));