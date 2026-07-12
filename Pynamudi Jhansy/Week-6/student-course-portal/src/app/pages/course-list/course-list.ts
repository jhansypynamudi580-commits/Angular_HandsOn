import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  toggleEnrollment(course: Course): void {
    if (this.isEnrolled(course)) {
      this.enrollmentService.unenroll(course.id);
    } else {
      this.enrollmentService.enroll(course.id);
    }
  }

  isEnrolled(course: Course): boolean {
    return this.enrollmentService.isEnrolled(course.id);
  }

}