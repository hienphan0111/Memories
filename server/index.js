import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

const PORT = process.env.PORT || 3500

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('server');
})
// database

const DATABASE_URL = 'mongodb+srv://hienphan:hienphan123@cluster0.j6iaexo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))})
  .catch((err) => console.log(err.message))

//mongoose.set('useFindAndModify', false);
