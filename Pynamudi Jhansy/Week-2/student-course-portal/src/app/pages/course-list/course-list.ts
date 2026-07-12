import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { id: 101, name: 'Angular', code: 'ANG101', credits: 4 },
    { id: 102, name: 'Java', code: 'JAVA102', credits: 3 },
    { id: 103, name: 'Python', code: 'PY103', credits: 4 },
    { id: 104, name: 'SQL', code: 'SQL104', credits: 3 },
    { id: 105, name: 'Data Structures', code: 'DS105', credits: 4 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

}
