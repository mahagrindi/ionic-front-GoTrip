import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { AlertController } from '@ionic/angular';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { FormGuideService } from 'src/app/services/form-guide.service';
import { TokenService } from 'src/app/services/token.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-form-guide',
  templateUrl: './form-guide.page.html',
  styleUrls: ['./form-guide.page.scss'],
})
export class FormGuidePage implements OnInit {
  processing: boolean;

  guidForm: FormGroup;
  workArea: String[] = [];
  hPrice: any;
  dPrice: any;
  reservationType: Number[];
  galerie: String = '';
  isSubmitted = false;
  profilePicture: String;
  uploadImage: String;
  time: { upper: any; lower: any };

  moveStart: RangeValue = 1;
  moveEnd: RangeValue = 5;
  setdage: any;
  items = [];
  selectedCatgeorie = [];
  selectedState = [];
  states = [
    {
      id: 1,
      nom: 'Tunis',
    },
    {
      id: 2,
      nom: 'Ben Arous',
    },
    {
      id: 3,
      nom: 'Sousse',
    },
    {
      id: 4,
      nom: 'Monastir',
    },
    {
      id: 5,
      nom: 'Mahdia',
    },
    {
      id: 6,
      nom: 'Nabeul',
    },
    {
      id: 7,
      nom: 'Tozeur',
    },
    {
      id: 8,
      nom: 'Gabes',
    },
  ];
  ListeCategorie:any;
  categorie:any;

  customAlertOptions = {
    header: 'Choose you Work Area',

    translucent: true,
  };
  constructor(
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private formGuideService: FormGuideService,
    private route: Router,
    private categorieBase:CategorieService,
    private func:FunctionsService
  ) {}

  setBadge(time: any) {
    console.log('time=', time);
    console.log(this.time);
  }
  remove(id: any) {
    for (let i = 0; i < this.categorie.length; i++) {
      if (id === this.categorie[i]._id) {
        const index = this.selectedCatgeorie.indexOf(this.categorie[i]._id);
        if (index !== -1) {
          this.selectedCatgeorie.splice(index, 1);
        }
      }
    }
  }

  ngOnInit() {
    this.guidForm = this.formBuilder.group({
      hPrice: ['', [Validators.required]],
      dPrice: ['', [Validators.required]],
    });
    this.categorieBase.getAllGategorie().subscribe(res=>{this.categorie=res;},err=>{console.log(err)});
  }

  onIonKnobMoveEnd(ev: Event) {
    this.moveStart = (ev as RangeCustomEvent).detail.value['lower'];
    this.moveEnd = (ev as RangeCustomEvent).detail.value['upper'];  }
  onChange(val: Event) {
    console.log(val);
  }

  compareWith(o1:any, o2:any) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o._id === o1._id);
    }

    return o1._id === o2._id;
  }

  handleChange(ev) {
    this.selectedCatgeorie = ev.target.value;
  }

  selectState(ev) {
    this.selectedState = ev.target.value;
  }
 async inscriGuide() {
    let guide = {
      idUser: this.tokenService.userData.value.userId,
      listCategory: this.selectedCatgeorie,
      workArea: this.selectedState,
      hourPrice: this.hPrice,
      dayPrice: this.dPrice,
      reservationType: [this.moveStart, this.moveEnd],
      ListOfbestplace: ['Ras jebal', 'plage Sousse', 'kantaoui Sousse'],
      galerie: ['profile2_img1.jpg', 'profile2_img2.jpg'],
      verifiedStatus: ['image_cin.jpg', 'b3.pdf'],
      profilePicture: 'profile2.jpg',
    };
    this.formGuideService.inscriPost(guide).subscribe(
      (res) => {
        console.log(res);
        this.formGuideService.modifyStatusUser().subscribe(
           async  (res) => {
            await this.func.presentSplash();
             window.location.reload();

          },
          (err) => console.log(err)
        );
       },
       (err) => {
        console.log(err.error);
       }
     );
     setTimeout(() => {
      this.func.dismissSplash();
     }, 800);
   await  this.route.navigate(['/tabs']);
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
  async presentAlert(alertHeader: any, alertMessage: any) {
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
