import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGrp: FormGroup;
  value: string;
  stepNumber = 1;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    const d = new Date();
    this.value = '';
    this.formGrp = this.fb.group({
      fullName: [''],
      age: [],
      countries: [[]],
      genders: [{}],
      accept: [],
      date:[d]
    });
  }

  next() {
    this.stepNumber++;
  }

  back() {
    this.stepNumber--;
  }
}
