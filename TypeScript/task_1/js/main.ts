// Teacher interface with readonly firstName and lastName
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Index signature for dynamic properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Print teacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Print teacher function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// StudentClass interfaces
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Examples
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher("John", "Doe")); // J. Doe

const student: StudentClassInterface = new StudentClass("Jane", "Smith");
console.log(student.displayName()); // Jane
console.log(student.workOnHomework()); // Currently working
