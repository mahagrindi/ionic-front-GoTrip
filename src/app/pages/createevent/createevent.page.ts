import { Component, OnInit } from '@angular/core';

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
  constructor() {

  this.startDate = new Date().toISOString();
  this.minDate = new Date().toISOString();
  }

  ngOnInit() {
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

}
