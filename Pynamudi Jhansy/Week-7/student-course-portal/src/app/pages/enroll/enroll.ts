import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enroll.html',
  styleUrl: './enroll.css'
})
export class EnrollComponent {

  studentName = '';
  email = '';
  courseId = '';
  semester = 'Odd';
  agree = false;


  constructor(private enrollmentService: EnrollmentService) {}


  submitForm() {

    const student = {
      name: this.studentName,
      email: this.email,
      courseId: this.courseId,
      semester: this.semester
    };

    this.enrollmentService.setStudent(student);

    alert('Enrollment submitted successfully!');

  }

}
