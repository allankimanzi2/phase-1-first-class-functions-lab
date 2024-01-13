// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  }
  
  // Example usage
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  console.log(returnFirstTwoDrivers(driversArray)); // Should log: ['Driver1', 'Driver2']
  console.log(returnLastTwoDrivers(driversArray)); // Should log: ['Driver3', 'Driver4']
  
  console.log(selectingDrivers[0](driversArray)); // Should also log: ['Driver1', 'Driver2']
  console.log(selectingDrivers[1](driversArray)); // Should also log: ['Driver3', 'Driver4']
  
  console.log(createFareMultiplier(4)(10)); // Should log: 40
  
  console.log(fareDoubler(5)); // Should log: 10
  console.log(fareTripler(5)); // Should log: 15
  
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // Should log: ['Driver1', 'Driver2']
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); // Should log: ['Driver3', 'Driver4']
  
