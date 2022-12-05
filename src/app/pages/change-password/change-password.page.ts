import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
const ip = 'localhost';
import { ChangePasswordService } from 'src/app/services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private changePasswordservice: ChangePasswordService,
    private route: Router
  ) {}

  isSubmitted = false;
  passwd = '';
  ChangePassword: FormGroup;

  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Vérifier le format du champ' },
    { type: 'minLength', message: 'password must have at least 6 characters ' },
  ];

  ngOnInit() {
    this.ChangePassword = this.formBuilder.group({
      passwd: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get errorControl() {
    return this.ChangePassword.controls;
  }
  async onSubmitPassword() {
    this.isSubmitted = true;
    if (!this.ChangePassword.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log('new password', this.passwd);
      console.log('history num', history.state.num);
      this.changePasswordservice
        .modify(history.state.num, this.passwd.trim())
        .subscribe(
          (res) => this.route.navigate(['/tabs']),
          (err) => console.log(err)
        );
    }
  }
}
