import { Component, OnInit, forwardRef, Input, ViewChild, Renderer2 } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { NG_VALUE_ACCESSOR , ControlValueAccessor} from '@angular/forms';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

export const EPANDED_DROPDOWN_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> GenderSelectorComponent),
  multi: true
};

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  providers: [EPANDED_DROPDOWN_VALUE_ACCESSOR],
  styleUrls: ['./gender-selector.component.css']
})
export class GenderSelectorComponent implements OnInit, ControlValueAccessor {
  selectedCity1: any;
  @Input('filter') filter: boolean;

  @ViewChild('dropdown') dropdown;
  onChange;

  onTouched;

  gend: SelectItem[];

  constructor( private renderer : Renderer2) {
    this.gend = [
      {label:'Select gender', value:null},
      {label:'Male', value:{id:1, name: 'Male', code: 'ml'}},
      {label:'Female', value:{id:2, name: 'Female', code: 'fl'}},
      {label:'Other', value:{id:3, name: 'Other', code: 'ot'}},
    ]
   }

  ngOnInit() {
  }
  writeValue(value: any): void {
  //  console.log('value : ', value);
    const div = this.dropdown;
    // console.log('Div : ', div );
    // this.renderer.setProperty(div, 'value', 'Sachithra');
    this.selectedCity1 = value;
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.dropdown.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClasss';
    this.renderer[action](div, 'disabled');
  }

  change( event ){
    //console.log('Event ', event);
    this.onChange(event.value)
    //  const div = this.dropdown;
    //   console.log('Div 1: ', div );
  }

}
