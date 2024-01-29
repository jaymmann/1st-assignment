// distance.js

function feetToMeters(feet) {
  return feet * 0.348; // 1 foot = 0.348 meters
}

function metersToFeet(meters) {
  return meters * 3.281; // 1 meter = 3.281 feet
}

function milesToKm(miles) {
  return miles * 1.609; // 1 mile = 1.609 kilometers
}

function kmToMiles(km) {
  return km * 0.621; // 1 kilometer = 0.621 miles
}

// Main calculate function
function calculate(unit, value) {
  let convertedValue;

  switch (unit) {
    case 'feet':
      convertedValue = feetToMeters(value);
      break;
    case 'meters':
      convertedValue = metersToFeet(value);
      break;
    case 'miles':
      convertedValue = milesToKm(value);
      break;
    case 'km':
      convertedValue = kmToMiles(value);
      break;
    default:
      console.log('Invalid unit provided:', unit);
      return NaN; 
  }

  return convertedValue;
}


module.exports = { calculate };
