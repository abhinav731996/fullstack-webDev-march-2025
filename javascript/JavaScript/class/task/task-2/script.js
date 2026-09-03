const users = [
  {
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"],
  },
  {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"],
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"],
  },
];

// task-1 trim spaces & convert to title case

function toTitleCase(str) {
  return str
    .trim()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
const formattedNames = users.map((u) => toTitleCase(u.name));
console.log("Task 1 Output:");

console.log("Name formatted: ", formattedNames);

// task-2 unique list of skills
let allSkills = [];

users.map((user) => {
  //calculate all skills
  user.skills.forEach((skills) => {
    allSkills.push(skills);
  });
});

let uniqSkills = [];
allSkills.forEach((skills) => {
  // make uniqe lists
  if (!uniqSkills.includes(skills)) {
    uniqSkills.push(skills);
  }
});
uniqSkills.sort();

let jsKnow = 0;
users.forEach((user) => {
  //who know java script
  if (user.skills.includes("javascript")) {
    jsKnow++;
  }
});
console.log("Task 2 output: ");
console.log("Unique skills:", uniqSkills);
console.log("User knowing JS: ", jsKnow);

// task-3 number operation

let salaiers = users.map((user) => Number(user.salary)); //converting salary from string to numbers

let sortedSalary = salaiers.sort((a, b) => a - b); //sorting salary in accending order

let lowestSalary = sortedSalary[0];
let highestSalary = sortedSalary[sortedSalary.length - 1]; // lowest & highest salary sorted

let total = 0;
sortedSalary.forEach((sal) => {
  total += sal;
}); // calculate total salary

let averageSalary = Math.round(total / sortedSalary.length);
console.log("Task-3 output:-");

console.log(
  `Average salary: ${averageSalary}, Highest Salary: ${highestSalary} & lowest salary: ${lowestSalary}`
);

// task-3 date operation

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday has not happened yet this year, subtract 1
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Create array with name & age
const usersWithAge = users.map((u) => ({
  name: toTitleCase(u.name),
  age: calculateAge(u.dob),
}));

// Find oldest user
const oldestUser = usersWithAge.reduce((oldest, curr) => {
  return curr.age > oldest.age ? curr : oldest;
});

console.log("Task-4 output:-");
console.log("Oldest user:", oldestUser);
console.log("All users name & age: ", usersWithAge);
