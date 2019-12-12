const express = require('express');
const app = express();

app.use(express.static('./../frontend'));

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/json', (req, res) => res.json({ name: "Pizzaria Mos Eisley" }))

app.listen(process.env.Port || 3000, () => {
  console.log(`Listening on port ${process.env.Port || 3000}`)
});
