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
      img: 'circuit5_img1.jpg',
      nbreStarts: 4,
      locations: 'Mahdia',
      name: 'The Great Mosque of Mahdia',
      note: 3,
      guide: 'yosra',
    },
    {
      id: 3,
      nbPlace: 5,
      fev: 'not_checked',
      price: '35 DT ',
      img: 'circuit1_img1.jpg',
      nbreStarts: 5,
      locations: 'tunis',
      name: 'Toure au El madina',
      note: 4.8,
      guide: 'yosra',
    },
    {
      id: 4,
      nbPlace: 5,
      fev: 'checked',
      price: '35 DT ',
      img: 'circuit2_img1.jpg',
      nbreStarts: 2,
      locations: 'El Kef',
      name: 'Toure a El kef',
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
      img: 'profile6.jpg',
      locations: 'Bizerte',
      name: 'Monia',
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
      price: '15 DT ',
      img: 'profile8.jpg',
      locations: 'Hammamt',
      name: 'Moaaz',
      workArea: [{ id: 1, nom: 'malliga' }],
      note: 4.8,
      entry: false,
    },
    {
      id: 3,
      age: '26',
      fev: 'checked',
      price: '25 DT ',
      img: 'profile7.jpg',
      locations: 'Sousses',
      workArea: [
        { id: 1, nom: 'Gowdaman' },
        { id: 2, nom: 'Prithivi' },
      ],
      name: 'Taha',
      note: 4.8,
      entry: false,
    },
  ];

  public results = [...this.data];
  public resultsGuide = [...this.guides];

  search(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(
      (d) => d.locations.toLowerCase().indexOf(query) > -1
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
