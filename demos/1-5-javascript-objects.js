// let employeeId = "1";
// let name = "Ezra";
// let jobTitle = "Theatre Teacher";
// let payRate = 38.46;

// function doSomethingWithEmployee(employeeId, name, jobTitle, payRate) {}

// doSomethingWithEmployee(employeeId, name, jobTitle, payRate);

// let object = {};
// let array = [];

let ezraEmployee = {
  employeeId: "1",
  name: "Ezra",
  jobTitle: "Theatre Teacher",
  payRate: 38.46,
};

// console.log(ezraEmployee.name);
// console.log(ezraEmployee["name"]);

// let info = `
//             The employee name is ${ezraEmployee.name}.
//             Their job title is ${ezraEmployee.jobTitle}.
//             They make $${ezraEmployee.payRate} per hour.
//             `;
// console.log(info);
// console.log(ezraEmployee.payRate, ezraEmployee.jobTitle);

// function printEmployee(employee) {
//   console.log(employee);
// }

// printEmployee(ezraEmployee);

function giveRaise(ezraEmployee) {
  ezraEmployee.payRate = ezraEmployee.payRate * 1.2;
  return ezraEmployee;
}

let updatedEmployee = giveRaise(ezraEmployee);
console.log(updatedEmployee);
