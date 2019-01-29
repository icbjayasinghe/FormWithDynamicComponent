import { Component, OnInit, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AgeInputComponent),
  multi: true
};

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.css'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class AgeInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('inputAge') inputAge;
  onChange;
  onTouched;

  constructor( private renderer: Renderer2 ) { }

  writeValue(value: any): void {
    const div = this.inputAge.nativeElement;
    this.renderer.setProperty(div, 'value', value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.inputAge.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }
  change(event) {
    this.onChange(event.target.value);
  }
  ngOnInit() {
  }

}
