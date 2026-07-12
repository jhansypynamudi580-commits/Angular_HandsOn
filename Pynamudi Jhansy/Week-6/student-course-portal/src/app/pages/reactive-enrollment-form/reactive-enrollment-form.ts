import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrls: ['./reactive-enrollment-form.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email]],
      courseId: ['', Validators.required],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array<FormControl>([])
    });
  }

  // Submit
  onSubmit(): void {
    console.log('FORM VALUE:', this.enrollForm.value);
    console.log('RAW VALUE:', this.enrollForm.getRawValue());
  }

  // FormArray getter
  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }

  // Add course
  addCourse(): void {
    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );
  }

  // Remove course
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }
}