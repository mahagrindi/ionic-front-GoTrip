import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalComponent } from './../../alert-modal/alert-modal.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  isModalOpen = false;
  isModalOpen2 = false;
  prix: any;
  count = 0 ;
  total_price = 0 ;

  public mydate ;
  identity:String ="";
  nbP: Number = this.count ;
   date : Date ;
    time :String ="";
    eventid : String ="";

  reservation: {  identity:String , nbP: Number , date : Date ,  eventid : String };
  isSubmitted = false;
 minDate:String ="";
  startDate:String ="";
  trip:any;

  constructor(

    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private modalController : ModalController,
  ) {}
 testData = [
      {
        id: 1,
        price: 35 ,
        fev: 'checked',
        img: '../../../assets/images/home/Sidi-Bou-Said-1.jpg',
        nbreStarts: 4,
        locations: 'saw',
        name: 'Prithivi',
        note: 4.8,
        catgrs :[ 'Food' ,'Shoping' , 'Shooting'],
        imgs :['profile1_img1.jpg' ,'profile1_img2.jpg' ,'profile1_img3.jpg' ,'profile5_img1.jpg' ,]
      }
    ];
  review = [
      {
        id: 1,
        name: 'Yelena Belove',
        note: 4.8,
        date: '15/11/2022',
        comnt: 'prety nice place',
        img : 'profile1.jpg',
      },
      {
        id: 2,
        name: 'Mark Belove',
        note: 5,
        date: '15/11/2022',
        comnt: 'prety nice place',
        img : 'profile2.jpg',
      }
    ];

    errors = [
      { type: 'required', message: 'Champ Obligatoire !' },
      { type: 'pattern', message: 'Vérifier le format du champ' },
      { type: 'minLength', message: 'Vérifier le numero passport / CIN' },
      { type: 'maxLength', message: 'Vérifier le numero passport / CIN' },
      { type: 'min', message: 'Minmuem resrvation 1' },
    ];
    res: FormGroup;
   ngOnInit(): void {
    this.trip=history.state.trip;
    console.log(this.trip);
    
    this.res = this.formBuilder.group({
      identity: [
        '',
        [
          Validators.required,
          Validators.pattern('([0-9])*$'),
          Validators.minLength(7),
          Validators.maxLength(9),


        ],
      ],
      nbP : [
        '',
        [
          Validators.min(1),
        ],
      ],
    });
    this.startDate = new Date().toISOString();
    this.minDate = new Date().toISOString();


  }
  get errorControl() {
    return this.res.controls;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  increment() {
    this.count++;
    this.total_price += this.testData[0].price ;

  }

  decrement() {
    if(this.count < 2){
      const alertMessage = 'Minumis palse is 1';
      const alertHeader = 'You have atliste reserve one plase';
      this.presentAlert(alertHeader, alertMessage);

    }else{
        this.count--;
    this.total_price -= this.testData[0].price ;
    }

  }
  showdate(){
    console.log(this.mydate);
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
  onSubmitresv() {
    this.reservation = {
      identity: this.identity ,
      nbP: this.nbP,
      date : this.mydate  ,
      eventid : this.eventid ,
    };

    this.isSubmitted = true;

   if (!this.res.valid) {
      const alertMessage = 'Please provide all the required values!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      // console.log('Please provide all the required values!');
      return false;

    }else {
      this.showModale();
    }
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
