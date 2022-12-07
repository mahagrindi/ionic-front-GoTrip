import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGuideService } from 'src/app/services/form-guide.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-form-guide',
  templateUrl: './form-guide.page.html',
  styleUrls: ['./form-guide.page.scss'],
})
export class FormGuidePage implements OnInit {
  guidForm: FormGroup;
  constructor(
    private tokenService:TokenService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private formGuideService:FormGuideService
  ) {}

  adresse: String = '';
  nom: String = '';
  prenom: String = '';
  isSubmitted = false;
  image: any;
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
      nom: [
        '',
        [
          Validators.required,
          // Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
      prenom: [
        '',
        [
          Validators.required,
          // Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
    });
  }
  
  inscriGuide(){
    let guide = {
      idUser:this.tokenService.userData.value.userId,
      listCategory:["catg1","catg2"],
      workArea:["city 1","city2","city3"],
      hourPrice:30,
      dayPrice:200,
      reservationType:[1,9999],
      ListOfbestplace:["place1","place2","place3","place4"],
      galerie:["img1","img2","img3"],
      verifiedStatus:["num cin","papier 2",
      {
        "matricule":"mat",
        "adresse":"adresse"
      }],
      profilePicture:"img",
    };
    this.formGuideService.inscriPost(guide).subscribe(
      (res) => {
        console.log(res);
        this.formGuideService.modifyStatusUser().subscribe((res)=>console.log(res),(err)=>console.log(err))
      },
      (err) => {
        console.log(err.error);
      }
    );

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
  async presentAlert(alertHeader:any, alertMessage:any) {
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
