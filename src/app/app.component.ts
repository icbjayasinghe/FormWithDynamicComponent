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

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.value = '';
    this.formGrp = this.fb.group({
      fullName: [''],
      age: [],
      countries: [[]],
      genders: [{}]
    });
  }
}
