const express = require("express");
const app = express();
const port = 3000;
const { User } = require("./database");

app.use(express.json());

// CREATE
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// READ
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
