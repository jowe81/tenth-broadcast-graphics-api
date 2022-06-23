const express = require('express');
const app = express();
const port = 3001;

const { generateLowerThird } = require('./imageFunctions');

app.get('/', (req, res) => {
  generateLowerThird()
    .then(err => {
      if (err) {
        console.log(err);
        res.send('error');
      } else {
        res.send('done rendering - all good');
      }
    })
});

const slides = require("./routes/slides");
app.use("/api", slides());


app.listen(port, () => {
  console.log(`Tenth Broadcast Graphics API listening on port ${port}`)
})