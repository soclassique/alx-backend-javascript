class HbtnCourse {
  constructor(name, duration, instructors, students) {
    this.name = name;
    this.duration = duration;
    this.instructors = instructors;
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
    console.log(`Students in ${this.name} course:`);
    this.students.forEach((student, index) => {
      console.log(`${index + 1}. ${student}`);
    });
  }
}

// Example usage
const webDevCourse = new HbtnCourse(
  'Web Development',
  '12 weeks',
  ['John', 'Jane'],
  ['Alice', 'Bob']
);
webDevCourse.enrollStudent('Charlie');
webDevCourse.listStudents();
