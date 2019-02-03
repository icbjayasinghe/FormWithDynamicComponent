import { Component, OnInit, forwardRef, ViewChild, Renderer2, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateInputComponent),
  multi: true
};

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit, ControlValueAccessor {
  minDate: any;
  maxDate: any;
  @Input()
  set setMinDate(minDate) {
    this.minDate = minDate;
  };

  @Input()
  set setMaxDate(maxDate){
    this.maxDate = maxDate;
  }

  @ViewChild('text') text;
  onChange;
  onTouched;
  value: any;
  constructor( private renderer: Renderer2 ) { }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.text.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }
  change(event){
    this.onChange(event);
  }

  ngOnInit() {
    //this.writeValue('2019-02-04T18:30:00.000Z');
  }

}
