const QRCode = require('qrcode');

const textToEncode = 'https://www.example.com';
const options = {
  errorCorrectionLevel: 'H',  // High error correction
  type: 'png',                 // Output format as SVG
  margin: 4,                   // Margin around the QR code
  color: { dark: '#000000', light: '#ffffff' }  // Colors for modules
};

QRCode.toFile('my-qrcode.png', textToEncode, options, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('QR code created successfully!');
  }
});
