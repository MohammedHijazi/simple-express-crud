const express = require('express');
const app = express();
const port = 3000;
const { User } = require('./database');


app.use(express.json());

// CREATE
app.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

// READ
app.get('/users', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// UPDATE
app.put('/users/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// DELETE
app.delete('/users/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
