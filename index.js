const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  //res.send('Hello World!');

  var im = require('imagemagick');
  im.identify('test-image.jpeg', function(err, metadata){
    if (err) throw err;
    res.send(metadata);
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})