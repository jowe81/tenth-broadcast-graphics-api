const router = require("express").Router();
const fs = require('fs');

module.exports = () => {

  router.post("/slides", async(req, res, next) => {
    try {

      console.log(req.body);

      let base64String = req.body.image;
      let base64Image = base64String.split(';base64,').pop();

      fs.writeFile('upload.png', base64Image, {encoding: 'base64'}, x => {
        console.log("Success", x);
      });
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let avatar = req.files.avatar;
          
          //Use the mv() method to place the file in upload directory (i.e. "uploads")
          avatar.mv('./uploads/' + avatar.name);

          //send response
          res.send({
              status: true,
              message: 'File is uploaded',
              data: {
                  name: avatar.name,
                  mimetype: avatar.mimetype,
                  size: avatar.size
              }
          });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  return router;
};
