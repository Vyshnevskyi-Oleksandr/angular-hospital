import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./shared/components/header/header.component";
import {RouterModule} from "@angular/router";
import {FindDoctorComponent} from "./shared/components/find-doctor/find-doctor.component";
import { AboutComponent } from './shared/components/about/about.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StepsModule} from "./shared/modules/steps/steps.module";
import { QualityComponent } from './shared/components/quality/quality.component';
import {ServiceListModule} from "./shared/modules/service-list/service-list.module";
import {DoctorsModule} from "./shared/modules/doctors/doctors.module";
import { ModalFormComponent } from './shared/components/modal-form/modal-form.component';
import {ModalService} from "./shared/services/modal.service";
import { ModalSubmitComponent } from './shared/components/modal-submit/modal-submit.component';
import { DoctorsPageComponent } from './shared/components/doctors-page/doctors-page.component';
import { MobileApplicationsComponent } from './shared/components/mobile-applications/mobile-applications.component';
import {CommentsModule} from "./shared/modules/comments/comments.module";
import { BookAppointmentComponent } from './shared/components/book-appointment/book-appointment.component';
import {FooterModule} from "./shared/modules/footer/footer.module";
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { ProductionPageComponent } from './shared/components/production-page/production-page.component';
import {MainPageComponent} from "./main-page.component";



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FindDoctorComponent,
    AboutComponent,
    ServicesComponent,
    HomePageComponent,
    QualityComponent,
    ModalFormComponent,
    ModalSubmitComponent,
    DoctorsPageComponent,
    MobileApplicationsComponent,
    BookAppointmentComponent,
    ReviewsComponent,
    ProductionPageComponent,
  ],
  exports: [

  ],
  providers: [
    ModalService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent, children: [
          {path: '', component: HomePageComponent},
          {path: 'about', component: AboutComponent},
          {path: 'services', component: ServicesComponent},
          {path: 'doctors', component: DoctorsPageComponent}
        ]
      }
    ]),
    StepsModule,
    ServiceListModule,
    DoctorsModule,
    CommentsModule,
    FooterModule,
  ]
})
export class MainPageModule { }
