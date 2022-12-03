import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-guide',
  templateUrl: './form-guide.page.html',
  styleUrls: ['./form-guide.page.scss'],
})
export class FormGuidePage implements OnInit {
  guidForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private alertController: AlertController
  ) {}

  adresse: String = '';
  isSubmitted = false;
  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Vérifier le format du champ' },
  ];
  ngOnInit() {
    this.guidForm = this.formBuilder.group({
      adresse: [
        '',
        [
          Validators.required,
          // Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
    });
  }
  SubmitRequest() {
    this.isSubmitted = true;
    if (!this.guidForm.valid) {
      const alertMessage = 'Please provide all the required values!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      return false;
    } else {
      console.log(this.guidForm.value);
    }
  }

  get errorControl() {
    return this.guidForm.controls;
  }
  // alertMessage: String;
  async presentAlert(alertHeader, alertMessage) {
    const alert = await this.alertController.create({
      header: alertHeader,
      subHeader: '',
      message: alertMessage,
      buttons: [{ text: 'OK', cssClass: 'alert-button-confirm' }],
      animated: true,
    });

    await alert.present();
  }
}
