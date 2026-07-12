import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourses: any[] = [];

  enroll(course: any) {
    this.enrolledCourses.push(course);
  }

  getEnrolledCourses() {
    return this.enrolledCourses;
  }
}