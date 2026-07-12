import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

import { CourseCardComponent } from '../../components/course-card/course-card';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {


  courses: Course[] = [];

  searchTerm: string = '';


  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {

    // Get courses from service
    this.courses =
      this.courseService.getCourses();


    // Read query parameter
    this.route.queryParamMap.subscribe(params => {

      this.searchTerm =
        params.get('search') || '';

      console.log(
        'Search value:',
        this.searchTerm
      );

    });

  }



  searchCourses(): void {

    this.router.navigate(
      ['/courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

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