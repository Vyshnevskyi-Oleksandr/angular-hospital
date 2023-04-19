import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../interface";

@Component({
  selector: 'app-service-list-wrapper',
  templateUrl: './service-list-wrapper.component.html',
  styleUrls: ['./service-list-wrapper.component.scss']
})
export class ServiceListWrapperComponent implements OnInit {

  @Input()
  servicesArr: Card[] = [
    {picture: "assets/img/c-heart.png", title: "Cardiology", text: "Our cardiologists are skilled at  the diagnosing and treating diseases\n" +
        "    of the cardiovascular system."},
    {picture: "assets/img/lungs.png", title: "Pulmonology", text: "Our Pulmonologist are skilled at  diagnosing treating diseases of the Pulmonology system."},
    {picture: "assets/img/peal.png", title: "Medicine", text: "Our medicine doctor are skilled at  diagnosing treating diseases of the  latest medicine system."}
  ]
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => this.selectChange(), 3000);
  }

  selectService(index: number) {
    this.selectedIndex = index
  }

  selectChange() {
    if(this.selectedIndex >= 0) {
      this.selectedIndex++;
      if(this.selectedIndex > 2) {
        this.selectedIndex = 0
      }
    }
  }

}
