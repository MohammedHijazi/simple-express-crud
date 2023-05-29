require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
