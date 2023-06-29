class Classroom {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.students = [];
  }

  enrollStudent(student) {
    if (this.students.length < this.capacity) {
      this.students.push(student);
      console.log(`${student} has been enrolled in ${this.name}.`);
    } else {
      console.log(`Sorry, the ${this.name} classroom is already full.`);
    }
  }

  getStudentCount() {
    return this.students.length;
  }

  listStudents() {
    console.log(`Students in ${this.name} classroom:`);
    this.students.forEach((student, index) => {
      console.log(`${index + 1}. ${student}`);
    });
  }
}

// Example usage
const mathClassroom = new Classroom('Math', 20);
mathClassroom.enrollStudent('Alice');
mathClassroom.enrollStudent('Bob');
mathClassroom.enrollStudent('Charlie');
mathClassroom.listStudents();
