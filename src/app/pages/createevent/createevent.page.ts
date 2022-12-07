import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, isPlatform, ModalController } from '@ionic/angular';
import { AlertModalComponent } from './../../alert-modal/alert-modal.component';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {

  public mydate ;
  minDate:String ="";
  startDate:String ="";
  isModalOpen = false;
  isModalOpen2 = false;
  Location:String ="";
  nbrplace:Number ;

  creation: {  Location:String , nbrplace: Number , date : Date ,    eventid : String };
  isSubmitted = false;



  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController : ModalController,

  ) {

  this.startDate = new Date().toISOString();
  this.minDate = new Date().toISOString();
  }

  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'The minimum place is 1' },
  ];
  create: FormGroup;

  ngOnInit(): void {
    this.create = this.formBuilder.group({
      nbrplace: [
        '',
        [
          Validators.required,
          Validators.pattern('([1-9])*$'),



        ],
      ],
      Location : [
        '',
        [
          Validators.required,
        ],
      ],
    });


  }
  get errorControl() {
    return this.create.controls;
  }




  showdate(){
    console.log(this.mydate);
  }
  activits: any[] = [
    {
      id: 1,
      name: 'Alice',
       },
    {
      id: 2,
      name: 'Bob',
       },
    {
      id: 3,
      name: 'Charlie',

    }
  ];

  public guides = [
    {
      id: 1,
      age : '26',
            fev: 'checked',
      price: '35 DT/houre ',
      img: 'profile1.jpg',
      locations: 'saw',
      name: 'Prithivi',
      note: 3,
    },
    {
      id: 3,
      age : '26',
            fev: 'not_checked',
      price: '35 DT/houre ',
      img: 'profile2.jpg',
      locations: 'saw2',
      name: 'malliga',
      note: 4.8,
    },
    {
      id: 4,
      age : '26',
            fev: 'checked',
      price: '35 DT/houre ',
      img: 'profile1.jpg',
      locations: 'saw2',
      name: 'Gowdaman',
      note: 4.8,
    },
  ];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

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
  onSubmitcreate() {
    this.creation = {

      Location: this.Location ,
      nbrplace: this.nbrplace,
      date : null  ,
      eventid : "" ,
    };

    this.isSubmitted = true;

   if (!this.create.valid) {
      const alertMessage = 'Please provide all the required values!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      // console.log('Please provide all the required values!');
      return false;

    }else {
      this.setOpen(true);
    }
  }


  sub (){
      this.creation = {

        Location: this.Location ,
        nbrplace: this.nbrplace,
        date : this.mydate   ,
        eventid : "" ,
      };

      console.log(this.creation);
        this.setOpen2(true);

  }

  async showModale(){
    const modal = await this.modalController.create({
      component : AlertModalComponent ,
      componentProps :{message : "test"},
      cssClass :'alert-modal'

    });

    await modal.present();

  }
}


