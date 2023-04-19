import { Component, OnInit } from '@angular/core';
import {Comments} from "../../../interface";

@Component({
  selector: 'app-comments-wrapper',
  templateUrl: './comments-wrapper.component.html',
  styleUrls: ['./comments-wrapper.component.scss']
})
export class CommentsWrapperComponent implements OnInit {

  commentsArr: Comments[] = [
    {photo: "alan.png", name: "Alan Zara Dilan", location: "New York, USA", text: "Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great revolution in medical services specially an overpopulated country where virtual chamber can create at anywhere thoughout country"},
    {photo: "alex.png", name: "Alex Maxwell", location: "San Francisco, USA", text: "I visited my PCP for abdominal pain. My doctor told me that I need to see Gastroenterologist. Earlier I used to call multiple offices to schedule an appointment that suites my time."},
    {photo: "tasnim.png", name: "Dr. Tasnim ara", location: "Los Angeles, USA", text: "HealthCare is enlightens my superpower each and every time...!\n" +
        "      I find DocTime a brand-able telemedicine platform with virtual waiting room, video consultation, e-prescription, beautifully planned user interface.\n" +
        "      Thank you :)"},
    {photo: "billy.jpeg", name: "Billy Harrington", location: "San Francisco, USA", text: "My fellow brothers! I glad to say that clinic help me with my shoulders"},
    {photo: "van.jpg", name: "Van Darkholm", location: "San Francisco, USA", text: "I had annoying pain in back. But all is perfect!"},
    {photo: "steve.jpg", name: "Steve Rambo", location: "San Francisco, USA", text: "Clinic use the most modern methods. And I'm happy that I was choose it."},
  ]

  offset: number = 0

  scrollRight() {
    this.offset += 403
    if (this.offset > 1210) {
      this.offset = 0
    }

  }

  scrollLeft() {
    this.offset -= 403
    if (this.offset < 0) {
      this.offset = 0
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
