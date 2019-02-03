import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem } from 'primeng/api';                 // api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AgeInputComponent } from './age-input/age-input.component';
import { GenderSelectorComponent } from './gender-selector/gender-selector.component';
import { AcceptSwitchComponent } from './accept-switch/accept-switch.component';
import { DateInputComponent } from './date-input/date-input.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CheckboxComponent,
    AgeInputComponent,
    GenderSelectorComponent,
    AcceptSwitchComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
