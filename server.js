require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
    const {name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({error: "Name and email are required."});
    }
    console.log({name, email});
  res.json({message: "Hello, " + name + "!"});
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log("User",id , "profile.");
  res.send("User " + id + " profile.");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;