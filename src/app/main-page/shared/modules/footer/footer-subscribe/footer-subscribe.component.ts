import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer-subscribe',
  templateUrl: './footer-subscribe.component.html',
  styleUrls: ['./footer-subscribe.component.scss']
})
export class FooterSubscribeComponent implements OnInit {

  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup ({
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
