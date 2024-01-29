// index.js

const { calculate } = require('./Distance');

exports.convertUnit = (req, res) => {
  const { unit, value } = req.query;
  
  console.log('Received query parameters:', { unit, value }); 

  let convertedValue;
  switch (unit) {
    case 'feet':
      convertedValue = calculate('feet', parseFloat(value));
      break;
    case 'meters':
      convertedValue = calculate('meters', parseFloat(value));
      break;
    case 'miles':
      convertedValue = calculate('miles', parseFloat(value));
      break;
    case 'km':
      convertedValue = calculate('km', parseFloat(value));
      break;
    default:
      console.log('Invalid unit provided:', unit); 
      return res.status(400).send('Invalid unit provided');
  }

  return res.status(200).send(convertedValue.toString());
};
