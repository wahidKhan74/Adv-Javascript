class Course {
    constructor(courseName, courseDuration, coursePrice) {
        this.courseName = courseName;
        this.courseDuration = courseDuration;
        this.coursePrice = coursePrice;
    }

    info() {
        console.log(`
            Course Name: ${this.courseName}, 
            Duration: ${this.courseDuration}, 
            Price: ${this.coursePrice}`);
    }
}

class Student  extends Course {
    constructor(courseName, courseDuration, coursePrice, studentName, studentAge) {
        // Call the parent class constructor
        super(courseName, courseDuration, coursePrice);

        // Initialize Student class properties
        this.studentName = studentName;
        this.studentAge = studentAge;
    }

    studentInfo() {
        console.log(`
            Student Name: ${this.studentName}, 
            Age: ${this.studentAge}`);
    }
}

// Create an instance of the Student class
const student1 = new Student("JavaScript Advanced", "1 Months", "$300", "Alice", 25);

student1.info(); // Call method from Course class
student1.studentInfo(); // Call method from Student class

console.log(student1);

const student2 = new Student("Python Advanced", "2 Months", "$400", "Bob", 30);

student2.info(); // Call method from Course class
student2.studentInfo(); // Call method from Student class