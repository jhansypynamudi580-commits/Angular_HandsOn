import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    HighlightDirective
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  isLoading = false;

  courses = [
    { id: 101, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed', enrolled: false },
    { id: 102, name: 'Java', code: 'JAVA102', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 103, name: 'Python', code: 'PY103', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 104, name: 'SQL', code: 'SQL104', credits: 3, gradeStatus: 'passed', enrolled: false },
    { id: 105, name: 'Data Structures', code: 'DS105', credits: 1, gradeStatus: 'pending', enrolled: false }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}