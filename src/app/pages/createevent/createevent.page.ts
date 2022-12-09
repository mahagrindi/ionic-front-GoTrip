import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { CreateEventService } from 'src/app/services/create-event.service';
import { TokenService } from 'src/app/services/token.service';
import { AlertModalComponent } from './../../alert-modal/alert-modal.component';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {
  activitselect = [];

  mydate:any ;
  myValue : boolean = false ;
  minDate:String ="";
  startDate:String ="";
  isModalOpen = false;
  isModalOpen2 = false;
  Location:String ="";
  Name:String ="";
  nbrplace:Number ;
  checkpublic : boolean ;

  creation: any;
  isSubmitted = false;



  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalController : ModalController,
    private createEventService: CreateEventService,
    private tokenService:TokenService,


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
      Name : [
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


  notify() {
    this.myValue = !this.myValue ;
    console.log(this.myValue);

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
      entry : false, },
    {
      id: 2,
      age : '26',
      fev: 'not_checked',
      price: '35 DT/houre ',
      img: 'profile2.jpg',
      locations: 'saw2',
      name: 'malliga',
      note: 4.8,
      entry : false,
    },
    {
      id: 3,
      age : '26',
      fev: 'checked',
      price: '35 DT/houre ',
      img: 'profile1.jpg',
      locations: 'saw2',
      name: 'Gowdaman',
      note: 4.8,
      entry : false,
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
      entry : false,
    },
  ];

  // pour l'overtuer et fremteur de model
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
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

  // to get value of mulite input

  handleChange(ev) {
   console.log(ev.target.value);
   this.activitselect =   ev.target.value;
   console.log(this.activitselect);

  }

  // submite forme 1  de location activite nb presome ..
  onSubmitcreate() {
    this.creation = {

      Location: this.Location ,
      Name : this.Name,
      nbrplace: this.nbrplace,
      activits : this.activitselect ,
      date : null  ,
      checkpublic : this.myValue,
      guiedIs : [] ,
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

// submite frome 2 de date
  sub (){
      this.creation = {

        Location: this.Location ,
      Name : this.Name,

        nbrplace: this.nbrplace,
        checkpublic : this.myValue ,
      activits : this.activitselect ,

        date : this.mydate   ,
        guiedIs : [] ,
      };

      if (!this.mydate){
        const alertMessage = 'Please select the date and time!';
        const alertHeader = 'Missing Informations!';
        this.presentAlert(alertHeader, alertMessage);
        // console.log('Please provide all the required values!');
        return false;
      }else{
        console.log(this.creation);
        this.setOpen2(true);
      }


  }


  // ---------- pour alerte de  validtions de creation
  async showModale(){
    const modal = await this.modalController.create({
      component : AlertModalComponent ,
      componentProps :{message : "test"},
      cssClass :'alert-modal'

    });

    await modal.present();

  }
  // ------------ pour sech guide
  public results = [...this.guides];

  search(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.guides.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
    console.log(this.results);
  }


  interpress(id) {
    for (let i = 0; i <= this.guides.length - 1; i++) {

      if (id === this.guides[i].id) {
        this.guides[i].entry = !this.guides[i].entry ;
      }


  }
}

  createTableCategorie() {
    let TableCategorie = new Array();
    for (let i = 0; i <= this.guides.length - 1; i++) {


        this.guides[i].entry  ? TableCategorie.push(this.guides[i].id) : null;
      }

    console.log(TableCategorie);
    return TableCategorie;
  }

submitfinle (){
    this.creation = {

     
      name : this.Name,
      dateCircuit : this.mydate   ,
      localization: this.Location ,
      guideIdProposed : this.createTableCategorie() ,
      totalplaceNumber: this.nbrplace,
      imgGroup:["img1","img2"],
      category : this.activitselect ,
      typeCircuit : this.myValue ,
      idUser:this.tokenService.userData.value.userId,    
    };
    this.createEventService.postCircuit( this.creation).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    });
    if (this.creation.guiedIs.length < 1 ){
      const alertMessage = 'Please select one guide at lest!';
      const alertHeader = 'Missing Informations!';
      this.presentAlert(alertHeader, alertMessage);
      // console.log('Please provide all the required values!');
      return false;
    }else
      if (this.creation.guiedIs.length > 3 ){
        const alertMessage = 'Please select Max 3 guides !';
        const alertHeader = '';
        this.presentAlert(alertHeader, alertMessage);
        // console.log('Please provide all the required values!');
        return false;

    }else{
      console.log(this.creation);
      const alertMessage = 'thank you for your resrvation';
        const alertHeader = '';
        this.presentAlert(alertHeader, alertMessage);
    }


}



}


