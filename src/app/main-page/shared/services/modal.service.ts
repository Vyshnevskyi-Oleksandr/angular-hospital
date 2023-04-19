import {Injectable} from "@angular/core";

@Injectable()

export class ModalService {
  modal = false
  modalSubmit = false
  switchModal() {
    this.modal = !this.modal
  }

  switchSubmit() {
    this.modalSubmit = !this.modalSubmit
  }

  switchDouble() {
    this.switchModal()
    this.switchSubmit()
  }

}
