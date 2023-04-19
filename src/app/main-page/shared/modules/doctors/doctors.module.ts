import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsWrapperComponent } from './doctors-wrapper/doctors-wrapper.component';


@NgModule({
  declarations: [
    DoctorsWrapperComponent,
  ],
    exports: [
      DoctorsWrapperComponent,

    ],
  imports: [
    CommonModule
  ]
})
export class DoctorsModule { }
