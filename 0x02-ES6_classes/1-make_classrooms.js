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

// Factory function to create classrooms
function createClassroom(name, capacity) {
  return new Classroom(name, capacity);
}

// Example usage
const mathClassroom = createClassroom('Math', 20);
mathClassroom.enrollStudent('Alice');
mathClassroom.enrollStudent('Bob');
mathClassroom.listStudents();

const scienceClassroom = createClassroom('Science', 15);
scienceClassroom.enrollStudent('Charlie');
scienceClassroom.enrollStudent('Diana');
scienceClassroom.enrollStudent('Ethan');
scienceClassroom.listStudents();
