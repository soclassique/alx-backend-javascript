class HbtnClass {
  constructor(name, professor, students) {
    this.name = name;
    this.professor = professor;
    this.students = students;
  }

  enrollStudent(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
      console.log(`${student} has been enrolled in ${this.name}.`);
    } else {
      console.log(`${student} is already enrolled in ${this.name}.`);
    }
  }

  getStudentCount() {
    return this.students.length;
  }

  listStudents() {
    console.log(`Students in ${this.name} class taught by ${this.professor}:`);
    this.students.forEach((student, index) => {
      console.log(`${index + 1}. ${student}`);
    });
  }
}

// Example usage
const dataStructures = new HbtnClass('Data Structures', 'John Doe', ['Alice', 'Bob']);
dataStructures.enrollStudent('Charlie');
dataStructures.listStudents();
