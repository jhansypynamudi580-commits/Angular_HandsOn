import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent implements OnInit {

  studentName = '';
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {

    const student = this.enrollmentService.getStudent();

    if (student) {
      this.studentName = student.name || '';
    }

    this.enrolledCourses =
      this.enrollmentService.getEnrolledCourses();

  }

}
