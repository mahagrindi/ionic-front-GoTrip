import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RangeValueAccessor,
  Validators,
} from '@angular/forms';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { AlertController, RangeChangeEventDetail } from '@ionic/angular';
// import { Filesystem, Directory } from '@capacitor/filesystem';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { FormGuideService } from 'src/app/services/form-guide.service';
import { TokenService } from 'src/app/services/token.service';

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
  timeMin: any = 20;
  timeMax: any = 100;
  timeMin2: any = 20;
  timeMax2: any = 100;
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
  categorie = [
    { id: 1, nom: 'Beach', icon: 'beach.svg', entry: false },
    {
      id: 2,
      nom: 'Camping',
      icon: 'camping.svg',
      entry: false,
    },

    {
      id: 3,
      nom: 'Forest',
      icon: 'forest.svg',
      entry: false,
    },
    {
      id: 4,
      nom: 'Fishing',
      icon: 'fishing.svg',
      entry: false,
    },
  ];

  customAlertOptions = {
    header: 'Choose you Work Area',

    translucent: true,
  };
  constructor(
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private formGuideService: FormGuideService,
    private route: Router
  ) {}

  setBadge(time: any) {
    console.log('time=', time);
    console.log(this.time);
  }
  // supprimer categorie
  remove(id: any) {
    console.log(this.selectedCatgeorie);
    for (let i = 0; i < this.categorie.length; i++) {
      if (id === this.categorie[i].id) {
        const index = this.selectedCatgeorie.indexOf(this.categorie[i].id);
        if (index !== -1) {
          this.selectedCatgeorie.splice(index, 1);
          console.log(this.selectedCatgeorie);
        }
      }
    }
  }

  ngOnInit() {
    this.guidForm = this.formBuilder.group({
      hPrice: ['', [Validators.required]],
      dPrice: ['', [Validators.required]],
    });
  }

  onIonKnobMoveEnd(ev: Event) {
    this.moveStart = (ev as RangeCustomEvent).detail.value['lower'];
    this.moveEnd = (ev as RangeCustomEvent).detail.value['upper'];

    // console.log('end', this.moveEnd);
  }
  onChange(val: Event) {
    console.log(val);
  }

  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.selectedCatgeorie = ev.target.value;
  }

  selectState(ev) {
    this.selectedState = ev.target.value;
  }
  inscriGuide() {
    console.log(this.dPrice);
    console.log(this.hPrice);
    let guide = {
      idUser: this.tokenService.userData.value.userId,
      listCategory: this.selectedCatgeorie,
      workArea: this.selectedState,
      hourPrice: this.hPrice,
      dayPrice: this.dPrice,
      reservationType: [this.moveStart, this.moveEnd],
      ListOfbestplace: ['Marina Sousse', 'place2', 'place3', 'place4'],
      galerie: ['img1.png', 'img2.png', 'img3.png'],
      verifiedStatus: ['image_cin.jpg', 'b3.pdf'],
      profilePicture: 'pdp.png',
    };
    this.formGuideService.inscriPost(guide).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/tabs']);
        this.formGuideService.modifyStatusUser().subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
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
