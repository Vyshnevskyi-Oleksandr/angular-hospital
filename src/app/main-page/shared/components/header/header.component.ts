import {Component, Input} from '@angular/core';
import {state, style, trigger} from "@angular/animations";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {

  constructor(public modal: ModalService) {
  }

}
