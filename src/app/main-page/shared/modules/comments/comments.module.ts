import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsWrapperComponent } from './comments-wrapper/comments-wrapper.component';



@NgModule({
    declarations: [
        CommentsWrapperComponent,
    ],
    exports: [
        CommentsWrapperComponent
    ],
  imports: [
    CommonModule,
  ]
})
export class CommentsModule { }
