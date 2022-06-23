const fs = require('fs')
const gm = require('gm').subClass({imageMagick: true});

const generateLowerThird = () => {
  return new Promise((resolve, reject) => {
    gm(1920, 1080, "#00000000")
    .fill("#000000AA")
    .drawRectangle(0, 820, 1920, 1080)
    .fill("#FFFFFFFF")
    .fontSize(50)
    .font('Locator Regular')
    .drawText(100, 900, "from scratch")
    .write("drawing.png", function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

module.exports = {
  generateLowerThird,
};