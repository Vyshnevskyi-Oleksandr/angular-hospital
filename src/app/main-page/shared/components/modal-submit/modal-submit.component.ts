import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal-submit',
  templateUrl: './modal-submit.component.html',
  styleUrls: ['./modal-submit.component.scss']
})
export class ModalSubmitComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
      if (this.modal.modalSubmit) {
        setTimeout(() => {this.modal.switchSubmit()}, 3000)
      }
  }

}
