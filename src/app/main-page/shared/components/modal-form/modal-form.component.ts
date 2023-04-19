import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  form!: FormGroup;

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log(formData)
      this.form.reset()

    }
  }

}
