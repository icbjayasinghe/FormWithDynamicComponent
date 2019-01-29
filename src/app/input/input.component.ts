import { Component, OnInit, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('text') text;
  onChange;
  onTouched;

  constructor( private renderer: Renderer2 ) { }

  writeValue(value: any): void {
    const div = this.text.nativeElement;
    this.renderer.setProperty(div, 'value', value);
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
    this.onChange(event.target.value);
  }
  ngOnInit() {
  }

}
