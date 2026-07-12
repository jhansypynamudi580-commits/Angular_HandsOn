import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification.component';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NotificationComponent,
    CourseSummaryWidgetComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  title = 'Student Course Portal';

  coursesAvailable = 0;
  enrolledStudents = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.coursesAvailable = this.courseService.getCourses().length;
  }

}