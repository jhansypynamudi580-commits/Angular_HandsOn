import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 101,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 102,
      name: 'Java',
      code: 'JAVA102',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 103,
      name: 'Python',
      code: 'PY103',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 104,
      name: 'SQL',
      code: 'SQL104',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 105,
      name: 'Cloud Computing',
      code: 'CC105',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}
