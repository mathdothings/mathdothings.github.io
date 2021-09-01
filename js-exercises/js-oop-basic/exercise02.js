let student = {
  name: "mathdothings",
  sclass: "VI",
  rollno: 12
}

// show info before alteration
console.log(
`
Name: ${student.name}
Class: ${student.sclass}
Roll Nº: ${student.rollno}
`);

// show info after alterarions

delete student.rollno;
console.log(student);
