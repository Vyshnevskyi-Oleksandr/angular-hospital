import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsWrapperComponent } from './steps-wrapper/steps-wrapper.component';



@NgModule({
  declarations: [
    StepsWrapperComponent,
  ],
  exports: [
    StepsWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StepsModule { }
