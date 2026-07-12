import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {


  @Input() course!: Course;


  constructor(
    private router: Router
  ){}


  openCourse(){

    this.router.navigate([
      '/courses',
      this.course.id
    ]);

  }

}