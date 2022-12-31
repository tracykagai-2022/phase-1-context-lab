// Function to create an employee record object
function createEmployeeRecord(arr) {
    const employee = {};
    employee.firstName = arr[0];
    employee.familyName = arr[1];
    employee.title = arr[2];
    employee.payPerHour = arr[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee;
  }
  
  // Function to create an array of employee records from an array of arrays
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  // Function to create a time in event object and add it to an employee record
  function createTimeInEvent(stamp) {
    const event = {};
    event.type = "TimeIn";
    event.hour = stamp.substring(11, 13);
    event.date = stamp.substring(0, 10);
    this.timeInEvents.push(event);
    return this;
  }
  
  // Function to create a time out event object and add it to an employee record
  function createTimeOutEvent(stamp) {
    const event = {};
    event.type = "TimeOut";
    event.hour = stamp.substring(11, 13);
    event.date = stamp.substring(0, 10);
    this.timeOutEvents.push(event);
    return this;
  }
  
  // Function to calculate the number of hours worked on a given date for an employee record
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    if (timeIn && timeOut) {
      return parseInt(timeOut.hour) - parseInt(timeIn.hour);
    }
    return 0;
  }
  
  // Function to calculate the wages earned on a given date for an employee record
  function wagesEarnedOnDate(date) {
    return this.hoursWorkedOnDate(date) * this.payPerHour;
  }
  
  // Function to calculate the total wages earned by an employee for all dates in their record
  function allWagesFor() {
    return this.timeInEvents.reduce((total, event) => {
      return total + this.wagesEarnedOnDate(event.date);
    }, 0);
  }
  
  // Function to search for an employee record by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  }
  
  // Function to search for an employee record by family name
  function findEmployeeByFamilyName(srcArray, familyName) {
    return srcArray.find(record => record.familyName === familyName);
  }
  