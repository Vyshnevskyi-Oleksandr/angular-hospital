import { Component, OnInit } from '@angular/core';
import {Card, Icon} from "../../../interface";

@Component({
  selector: 'app-doctors-wrapper',
  templateUrl: './doctors-wrapper.component.html',
  styleUrls: ['./doctors-wrapper.component.scss']
})
export class DoctorsWrapperComponent implements OnInit {

  doctorsArr: Card[] = [
    {picture: "assets/img/amanda.png", title: "Dr. Amanda Linda", text: "Dentist Specialist"},
    {picture: "assets/img/alice.png", title: "Dr. Alisa Rahman", text: "Cardiologist Specialist"},
    {picture: "assets/img/anthony.png", title: "Dr. Anthony Fauci", text: "Neurology Specialist"},
    {picture: "assets/img/khalid.png", title: "Dr. Khalid Abbed", text: "Cancer Specialist"},
    {picture: "assets/img/addams.jpg", title: "Dr. Avada Addams", text: "Cardiologist Specialist"},
    {picture: "assets/img/sins.jpg", title: "Dr. John Sins", text: "Dentist Specialist"},
    {picture: "assets/img/darling.jpg", title: "Dr. Casper Darling", text: "Neurology Specialist"},
    {picture: "assets/img/clark.jpg", title: "Dr. Clark Kent", text: "Cancer Specialist"}
  ]

  iconsArr: Icon[] = [
    {icon: "assets/img/fb.png", alt: "fb-icon"},
    {icon: "assets/img/tw.png", alt: "tw-icon"},
    {icon: "assets/img/ld.png", alt: "fb-icon"}
  ]
  doctorsToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  buttonName = 'Explore All Doctors'

  toggle() {
    this.doctorsToggle = !this.doctorsToggle
    this.buttonName = (this.buttonName === 'Explore All Doctors') ? 'Hide All Doctors' : 'Explore All Doctors';
    }

}
