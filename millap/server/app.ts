/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://www.millaflyger.com/'],
  }),
);

const port = process.env.DEV_PORT || process.env.PORT || 8080;

app.use((req, res) => {
  res.status(404).json({ message: 'Error' });
});
app.listen(port, () => console.log('Server is listening on port 8080'));

export default app;
