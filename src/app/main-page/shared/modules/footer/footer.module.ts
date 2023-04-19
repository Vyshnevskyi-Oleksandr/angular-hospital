import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterWrapperComponent } from './footer-wrapper/footer-wrapper.component';
import { FooterSocialInformationComponent } from './footer-social-information/footer-social-information.component';
import { FooterCategoriesComponent } from './footer-categories/footer-categories.component';
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "../../../main-page.component";
import {HomePageComponent} from "../../components/home-page/home-page.component";
import {AboutComponent} from "../../components/about/about.component";
import {ServicesComponent} from "../../components/services/services.component";
import {DoctorsPageComponent} from "../../components/doctors-page/doctors-page.component";
import {ReviewsComponent} from "../../components/reviews/reviews.component";
import {ProductionPageComponent} from "../../components/production-page/production-page.component";
import { FooterAboutComponent } from './footer-about/footer-about.component';
import { FooterSubscribeComponent } from './footer-subscribe/footer-subscribe.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';


@NgModule({
  declarations: [
    FooterWrapperComponent,
    FooterSocialInformationComponent,
    FooterCategoriesComponent,
    FooterAboutComponent,
    FooterSubscribeComponent,
    FooterBottomComponent
  ],
  exports: [
    FooterWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent, children: [
          {path: '', component: HomePageComponent},
          {path: 'about', component: AboutComponent},
          {path: 'services', component: ServicesComponent},
          {path: 'doctors', component: DoctorsPageComponent},
          {path: 'reviews', component: ReviewsComponent},
          {path: 'production', component: ProductionPageComponent}
        ]
      }
    ]),
    ReactiveFormsModule,
  ]
})
export class FooterModule { }
