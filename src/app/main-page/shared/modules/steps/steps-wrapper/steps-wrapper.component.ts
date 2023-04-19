import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../interface";

@Component({
  selector: 'app-steps-wrapper',
  templateUrl: './steps-wrapper.component.html',
  styleUrls: ['./steps-wrapper.component.scss']
})
export class StepsWrapperComponent implements OnInit {

  @Input()
  stepsArr: Card[] = [
    {picture: "assets/img/loop.png", title: "Find best doctor’s", text: "Find your doctor easily with a minimum of effort. We've kept everything organised for you."},
    {picture: "assets/img/calendar.png", title: "Get Appointment", text: "Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest."},
    {picture: "assets/img/online.png", title: "Happy Consultations", text: "Do consultations and  take the service based on your appointment. Get back to good health"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
