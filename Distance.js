// Distance.js
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
        console.log(`${value} feet is ${convertedValue} meters.`);
        break;
      case 'meters':
        convertedValue = metersToFeet(value);
        console.log(`${value} meters is ${convertedValue} feet.`);
        break;
      case 'miles':
        convertedValue = milesToKm(value);
        console.log(`${value} miles is ${convertedValue} kilometers.`);
        break;
      case 'km':
        convertedValue = kmToMiles(value);
        console.log(`${value} kilometers is ${convertedValue} miles.`);
        break;
      default:
        console.log('Invalid unit provided.');
    }
  
    return convertedValue;
  }
  
  // Export the calculate function
  module.exports = { calculate };