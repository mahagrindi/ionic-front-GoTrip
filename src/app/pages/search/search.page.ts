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
      guide: 'yosra',
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
      guide: 'yosra',
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
      guide: 'yosra',
    },
  ];

  public guides = [
    {
      id: 1,
      age: '26',
      fev: 'checked',
      price: '35 DT ',
      img: 'profile1.jpg',
      locations: 'saw',
      name: 'Prithivi',
      workArea: [
        { id: 1, nom: 'Prithivi' },
        { id: 2, nom: 'malliga' },
      ],
      note: 3,
      entry: false,
    },
    {
      id: 2,
      age: '26',
      fev: 'not_checked',
      price: '35 DT ',
      img: 'profile2.jpg',
      locations: 'saw2',
      name: 'malliga',
      workArea: [{ id: 1, nom: 'malliga' }],
      note: 4.8,
      entry: false,
    },
    {
      id: 3,
      age: '26',
      fev: 'checked',
      price: '35 DT ',
      img: 'profile1.jpg',
      locations: 'saw2',
      workArea: [
        { id: 1, nom: 'Gowdaman' },
        { id: 2, nom: 'Prithivi' },
      ],
      name: 'Gowdaman',
      note: 4.8,
      entry: false,
    },
  ];

  public results = [...this.data];
  public resultsGuide = [...this.guides];

  search(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );

    for (let j = 0; j < this.guides.length; j++) {
      for (let i = 0; i < this.guides[j].workArea.length; i++) {
        this.resultsGuide = this.guides.filter(
          (dg) => dg.workArea[i].nom.toLowerCase().indexOf(query) > -1
        );
      }
    }
    console.log(this.resultsGuide);
    console.log(this.results);
  }

  search2(event: any) {
    const query = event.target.value.toLowerCase();
    this.resultsGuide = this.guides.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
    console.log(this.results);
  }

  interpress(id) {
    for (let i = 0; i <= this.guides.length - 1; i++) {
      if (id === this.guides[i].id) {
        this.guides[i].entry = !this.guides[i].entry;
      }
    }
  }

  ngOnInit() {}
}
