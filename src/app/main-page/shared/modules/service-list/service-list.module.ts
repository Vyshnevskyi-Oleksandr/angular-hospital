import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListWrapperComponent } from './service-list-wrapper/service-list-wrapper.component';

@NgModule({
  declarations: [
    ServiceListWrapperComponent,
  ],
  exports: [
    ServiceListWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceListModule { }
