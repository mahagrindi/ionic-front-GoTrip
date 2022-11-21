import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.page.html',
  styleUrls: ['./intrests.page.scss'],
  
})
export class IntrestsPage implements OnInit {

  constructor(localStorage:Storage) {
    this.testData = [
      {
        id: 1,
        price: '35 DT ',
        fev: 'checked',
        img: 'img1.jpg',
        nbreStarts: 4,
        locations: 'saw',
        name: 'Prithivi',
        note: 4.8,
      },
      {
        id: 3,
        price: '35 DT ',
        fev: 'not_checked',
        img: 'stay-in-tunis-e1555423387390.jpg',
        nbreStarts: 5,
        locations: 'saw2',
        name: 'malliga',
        note: 4.8,
      },
      {
        id: 3,
        price: '35 DT ',
        fev: 'checked',
        img: 'img1.jpg',
        nbreStarts: 2,
        locations: 'saw2',
        name: 'Gowdaman',
        note: 4.8,
      },
      {
        id: 3,
        price: '35 DT ',
        fev: 'not_checked',
        img: 'stay-in-tunis-e1555423387390.jpg',
        nbreStarts: 2,
        locations: 'saw2',
        name: 'Neethi',
        note: 4.8,
      },
      {
        id: 3,
        price: '35 DT ',
        fev: 'checked',
        img: 'stay-in-tunis-e1555423387390.jpg',
        nbreStarts: 5,
        locations: 'saw2',
        name: 'abirami1',
        note: 4.8,
      },
    ];

   
  }
entry:any;
entry1:any;
entry2:any;
entry3:any;
entry4:any;
entry5:any;
entry6:any;
entry7:any;
testData:any

  ngOnInit() {
   
    
  }
  interpress()
  {
   
   this.entry= !this.entry;
 
  }
  interpress1()
  {

   this.entry1= !this.entry1;

  }
  interpress2()
  {

   this.entry2= !this.entry2;

  }
  interpress3()
  {
   

   this.entry3= !this.entry3;

  }
  interpress4()
  {
   

   this.entry4= !this.entry4;

  }
  interpress5()
  {
   
 
   this.entry5= !this.entry5;

  }
  interpress6()
  {
   
  
   this.entry6= !this.entry6;
 
  }
  interpress7()
  {
   
  
   this.entry7= !this.entry7;
  }

}
