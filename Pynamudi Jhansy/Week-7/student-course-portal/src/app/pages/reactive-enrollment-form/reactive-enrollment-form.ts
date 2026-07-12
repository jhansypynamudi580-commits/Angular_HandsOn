import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({

      studentName: ['', Validators.required],

      studentEmail: ['', [
        Validators.required,
        Validators.email
      ]],

      courseId: ['', Validators.required],

      semester: ['Odd'],

      additionalCourses: this.fb.array([])

    });

  }


  get additionalCourses() {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }


  addCourse() {

    this.additionalCourses.push(
      this.fb.control('')
    );

  }


  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }


  onSubmit() {

    console.log(this.enrollForm.value);

  }


  canDeactivate(): boolean {

    if (this.enrollForm.dirty) {

      return window.confirm(
        'You have unsaved changes. Leave?'
      );

    }

    return true;

  }

}