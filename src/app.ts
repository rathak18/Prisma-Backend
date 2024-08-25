import express from 'express';
import blogRoutes from './api';

const app = express();

app.use(express.json());
app.use('/api', blogRoutes);

export default app;
