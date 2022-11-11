import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  testData: any;
  review: any;
  constructor() {
    this.testData = [
      {
        id: 1,
        price: '35 DT ',
        fev: 'checked',
        img: '../../../assets/images/home/Sidi-Bou-Said-1.jpg',
        nbreStarts: 4,
        locations: 'saw',
        name: 'Prithivi',
        note: 4.8,
        catgrs :[ 'Food' ,'Shoping' , 'Shooting'],
        imgs :['image1.jpg' ,'image2.jpg','image3.jpg']
      },
    ];
    this.review = [
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
      },
    ];
 }

  ngOnInit() {
  }

}
