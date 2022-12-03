import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor() {}

  data = [
    {
      id: 1,
      nbPlace: 5,
      fev: 'checked',
      price: '35 DT ',
      img: 'image1.jpg',
      nbreStarts: 4,
      locations: 'saw',
      name: 'Prithivi',
      note: 3,
    },
    {
      id: 3,
      nbPlace: 5,
      fev: 'not_checked',
      price: '35 DT ',
      img: 'image2.jpg',
      nbreStarts: 5,
      locations: 'saw2',
      name: 'malliga',
      note: 4.8,
    },
    {
      id: 4,
      nbPlace: 5,
      fev: 'checked',
      price: '35 DT ',
      img: 'image3.jpg',
      nbreStarts: 2,
      locations: 'saw2',
      name: 'Gowdaman',
      note: 4.8,
    },
  ];

  public results = [...this.data];

  search(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
    console.log(this.results);
  }
  ngOnInit() {}
}
