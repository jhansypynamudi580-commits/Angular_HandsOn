import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseList },
  { path: 'profile', component: StudentProfile }
];