import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  ModalController,
  RangeCustomEvent,
} from '@ionic/angular';
import { CreateEventService } from 'src/app/services/create-event.service';
import { TokenService } from 'src/app/services/token.service';
import { RangeValue } from '@ionic/core';
import { AlertModalComponent } from './../../alert-modal/alert-modal.component';
import { CategorieService } from 'src/app/services/categorie.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {
  activitselect = [];

  mydate: any;
  myValue: boolean = false;
  minDate: String = '';
  startDate: String = '';
  isModalOpen = false;
  isModalOpen2 = false;
  Location: String = '';
  Name: String = '';
  nbrplace: Number = 1;
  checkpublic: boolean;
  nbrplaceValue: RangeValue = 1;
  creation: any;
  isSubmitted = false;
  categorie: any;
  allGuideCollection = [];

   constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController: ModalController,
    private createEventService: CreateEventService,
    private tokenService: TokenService,
    private router: Router,
    private categorieBase: CategorieService,
    private guideService: GuideService
  ) {
    this.startDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
    this.getAllGuide();
  }

  errors = [
    { type: 'required', message: 'Champ Obligatoire  !' },
    { type: 'pattern', message: 'The minimum place is 1' },
  ];
  create: FormGroup;

  ngOnInit(): void {
    this.create = this.formBuilder.group({
      nbrplace: ['', [Validators.required, Validators.pattern('([1-9])*$')]],
      Location: ['', [Validators.required]],
      Name: ['', [Validators.required]],
    });
    this.categorieBase.getAllGategorie().subscribe(
      (res) => {
        this.categorie = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllGuide() {
    let AllGuide: any = [];
    let guideName: any = [];
    this.guideService.getNameGuide().subscribe((res) => (guideName = res));
    this.guideService.getAllGuide().subscribe(async (res) => {
      AllGuide = res;
      await AllGuide.forEach(async (element) => {
        await guideName.forEach((elm) => {
          if (elm._id == element.idUser) {
            this.allGuideCollection.push({
              _id: element._id,
              username: elm.username,
              profilePicture: element.profilePicture,
              workArea: element.workArea,
              dayPrice: element.dayPrice,
              fev: 'not_checked',
              ratingNumber: element.ratingNumber,
              entry: false,
            });
          }
        });
      });
      // console.log(this.allGuideCollection);
    });
  }

  get errorControl() {
    return this.create.controls;
  }

  onIonChangeNbrPlace(ev: Event) {
    this.nbrplaceValue = (ev as RangeCustomEvent).detail.value;
  }

  notify() {
    this.myValue = !this.myValue;
    console.log(this.myValue);
  }

  showdate() {
    console.log(this.mydate);
  }

  // pour l'overtuer et fremteur de model
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2() {
    this.isModalOpen2 = !this.isModalOpen2;
  }
  // alerte de errur
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

  async presentAlert2(alertHeader, alertMessage) {
    const alert = await this.alertController.create({
      header: alertHeader,
      subHeader: '',
      message: alertMessage,
      buttons: [
        {
          text: 'OK',
          cssClass: 'alert-button-confirm',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
      animated: true,
    });

    await alert.present();
  }

  // to get value of mulite input

  handleChange(ev) {
    console.log(ev.target.value);
    this.activitselect = ev.target.value;
    console.log(this.activitselect);
  }

  // submite forme 1  de location activite nb presome ..
  onSubmitcreate() {
    this.creation = {
      Location: this.Location,
      Name: this.Name,
      nbrplace: this.nbrplaceValue,
      activits: this.activitselect,
      date: null,
      checkpublic: this.myValue,
      guiedIs: [],
    };

    this.isSubmitted = true;

    if (!this.create.valid) {
      const alertMessage = 'Please provide all the required values!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      return false;
    } else {
      this.setOpen(true);
    }
  }

  // submite frome 2 de date
  sub() {
    this.creation = {
      Location: this.Location,
      Name: this.Name,

      nbrplace: this.nbrplace,
      checkpublic: this.myValue,
      activits: this.activitselect,

      date: this.mydate,
      guiedIs: [],
    };

    if (!this.mydate) {
      const alertMessage = 'Please select the date and time!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      // console.log('Please provide all the required values!');
      return false;
    } else {
      // console.log(this.creation);
      this.setOpen2();
    }
  }

  // ---------- pour alerte de  validtions de creation
  async showModale() {
    const modal = await this.modalController.create({
      component: AlertModalComponent,
      componentProps: { message: 'test' },
      cssClass: 'alert-modal',
    });

    await modal.present();
  }
  // ------------ pour sech guide
  public results = [...this.allGuideCollection];


  search(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.allGuideCollection.filter(
      (d) => d.username.toLowerCase().indexOf(query) > -1
    );
    // console.log(this.results);
  }

  interpress(id) {
    for (let i = 0; i <= this.allGuideCollection.length - 1; i++) {
      if (id === this.allGuideCollection[i]._id) {
        this.allGuideCollection[i].entry = !this.allGuideCollection[i].entry;
      }
    }
  }

  createTableCategorie() {
    let TableCategorie = new Array();
    for (let i = 0; i <= this.allGuideCollection.length - 1; i++) {
      this.allGuideCollection[i].entry
        ? TableCategorie.push({_id:this.allGuideCollection[i]._id,etat:false})
        : null;
    }

    // console.log(TableCategorie);
    return TableCategorie;
  }

  submitfinle() {
    this.creation = {
      name: this.Name,
      dateCircuit: this.mydate,
      localization: this.Location,
      guideIdProposed: this.createTableCategorie(),
      totalplaceNumber: this.nbrplace,
      imgGroup: [ 'circuit7_img1.jpg','circuit7_img2.jpg' ,'circuit7_img3.jpg','circuit7_img4.jpg'],
      category: this.activitselect,
      typeCircuit: this.myValue,
      idUser: this.tokenService.userData.value.userId,
    };
    this.createEventService.postCircuit(this.creation).subscribe(
      async (res) => {
        // console.log(res);
        this.setOpen(false);
        this.setOpen2();
        await this.router.navigate(['/tabs']);
      },
      (err) => {
        console.log(err);
      }
    );
    // if (this.creation.guiedIs.length < 1 ){
    //   const alertMessage = 'Please select one guide at lest!';
    //   const alertHeader = 'Missing Informations!';
    //   this.presentAlert(alertHeader, alertMessage);
    //   // console.log('Please provide all the required values!');
    //   return false;
    // } else if (this.creation.guiedIs.length > 3) {
    //   const alertMessage = 'Please select Max 3 guides !';
    //   const alertHeader = '';
    //   this.presentAlert(alertHeader, alertMessage);
    //   // console.log('Please provide all the required values!');
    //   return false;
    // } else {
    //   console.log(this.creation);
    //   const alertMessage = 'thank you for your reservation';
    //   const alertHeader = '';
    //   this.setOpen(false);
    //   this.setOpen2(false);
    //   this.presentAlert2(alertHeader, alertMessage);

    // }
  }

  verifGuide2() {
    return true;
  }
}
