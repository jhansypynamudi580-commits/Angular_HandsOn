import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  private student: any = null;


  constructor(private courseService: CourseService) {}


  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }


  unenroll(courseId: number): void {
    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);
  }


  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }


  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter((course): course is Course => course !== undefined);
  }


  // For enrollment form
  setStudent(student: any): void {
    this.student = student;
  }


  getStudent(): any {
    return this.student;
  }


  // For student profile
  getCourses(): Course[] {
    return this.getEnrolledCourses();
  }

}