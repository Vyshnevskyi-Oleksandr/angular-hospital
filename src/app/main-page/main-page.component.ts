import { Component, OnInit } from '@angular/core';
import {ModalService} from "./shared/services/modal.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
  }

}
