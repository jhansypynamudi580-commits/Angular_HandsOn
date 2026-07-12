import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList {

  constructor(private enrollService: EnrollmentService) {}

  courses = [
    { id: 101, name: 'Angular' },
    { id: 102, name: 'Java' },
    { id: 103, name: 'Python' },
    { id: 104, name: 'SQL' },
    { id: 105, name: 'Data Structures' }
  ];

  onEnroll(course: any) {
    this.enrollService.enroll(course);
    console.log('Enrolled:', course);
  }
}