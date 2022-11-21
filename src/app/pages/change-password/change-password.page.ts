import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
const ip = 'localhost';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
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
  onSubmitPassword() {
    this.isSubmitted = true;
    if (!this.ChangePassword.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log('new password', this.passwd);
      console.log('history num', history.state.num);
      console.log('history token', history.state.token);
      const headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${history.state.token}`,
        password: `${this.passwd}`,
      });
      this.http
        .patch(`http://${ip}:3001/verifications/${history.state.num}`, {
          headers: headers,
        })
        .subscribe(
          (res) => console.log('sucess update'),
          (err) => console.log('error update')
        );
    }
  }
}
