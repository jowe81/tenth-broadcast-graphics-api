const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3001;


app.use(fileUpload({createParentPath: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

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