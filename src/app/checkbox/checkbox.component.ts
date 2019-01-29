import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  model: any;
  value: any;
  binary: string;
  selectedValues: any;
  disabled = false;
  checked = false;
  onChange;
  onTouched;
  writeValue(model: any): void {
    this.selectedValues = model;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  change(event, checkbox, focus: boolean) {
    console.log(event);
    console.log(checkbox);
    console.log('select value :  ' , this.selectedValues);
    this.onChange(this.selectedValues);
    // this.onChange(event);
  }


  constructor() { }

  ngOnInit() {
  }

}
