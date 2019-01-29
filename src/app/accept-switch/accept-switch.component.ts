import { Component, OnInit, forwardRef, ViewChild, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUTSWITCH_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AcceptSwitchComponent),
  multi: true,
};

@Component({
  selector: 'app-accept-switch',
  templateUrl: './accept-switch.component.html',
  styleUrls: ['./accept-switch.component.css'],
  providers: [INPUTSWITCH_VALUE_ACCESSOR]
})
export class AcceptSwitchComponent implements OnInit, ControlValueAccessor {
  @ViewChild('switchTag') switchTag;
  onChange;
  onTouched;

  checked2: boolean;
  constructor(private renderer: Renderer2) { }
  writeValue(value: any): void {
    const div = this.switchTag;
    this.checked2 = <boolean>value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.switchTag.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }
  change(event) {
    this.checked2 = event.checked;
    this.onChange(event.checked);
  }

  ngOnInit() {
  }

}
