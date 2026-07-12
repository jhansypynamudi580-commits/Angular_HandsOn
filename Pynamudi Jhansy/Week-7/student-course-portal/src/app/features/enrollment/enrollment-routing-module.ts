import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { unsavedchangesGuard } from '../../guards/unsavedchanges.guard';


const routes: Routes = [

  {
    path: '',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [unsavedchangesGuard]
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EnrollmentRoutingModule {

}