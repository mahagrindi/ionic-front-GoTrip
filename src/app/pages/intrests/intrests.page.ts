import { Component, OnInit } from '@angular/core';
import { IntrestsService } from 'src/app/services/intrests.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.page.html',
  styleUrls: ['./intrests.page.scss'],
})
export class IntrestsPage implements OnInit {
  entry: any;
  entry1: any;
  entry2: any;
  entry3: any;
  entry4: any;
  entry5: any;
  categorie = [
    { id: 1, nom: 'Beach', icon: 'beach.svg', entry: false },
    {
      id: 2,
      nom: 'Camping',
      icon: 'camping.svg',
      entry: false,
    },

    {
      id: 3,
      nom: 'Forest',
      icon: 'forest.svg',
      entry: false,
    },
    {
      id: 4,
      nom: 'Fishing',
      icon: 'fishing.svg',
      entry: false,
    },
  ];

  constructor(
    private intrestsService: IntrestsService,
    private route: Router
  ) {}

  ngOnInit() {}
  interpress(id: any) {
    for (let i = 0; i < this.categorie.length; i++) {
      if (id === this.categorie[i].id) {
        this.categorie[i].entry = !this.categorie[i].entry;
      }
    }
  }
  // interpress1() {
  //   this.entry1 = !this.entry1;
  // }
  // interpress2() {
  //   this.entry2 = !this.entry2;
  // }
  // interpress3() {
  //   this.entry3 = !this.entry3;
  // }
  // interpress4() {
  //   this.entry4 = !this.entry4;
  // }
  // interpress5() {
  //   this.entry5 = !this.entry5;
  // }
  createTableCategorie() {
    let TableCategorie = new Array();
    for (let i = 0; i <= this.categorie.length; i++) {
      console.log(this.categorie[i].entry);

      this.categorie[i].entry
        ? TableCategorie.push(this.categorie[i].nom)
        : null;
    }
    console.log(TableCategorie);

    return TableCategorie;
  }
  updateRecomended() {
    this.intrestsService.updateRecomemnd(this.createTableCategorie()).subscribe(
      (res) => {
        this.route.navigate(['/tabs']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
