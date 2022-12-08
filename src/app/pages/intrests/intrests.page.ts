import { Component, OnInit } from '@angular/core';
import { IntrestsService } from 'src/app/services/intrests.service';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.page.html',
  styleUrls: ['./intrests.page.scss'],
})
export class IntrestsPage implements OnInit {
  categorie :any;

  constructor(
    private intrestsService: IntrestsService,
    private route: Router,
    private categorieService:CategorieService
  ) {}

  ngOnInit() {
   this.categorieService.getAllGategorie().subscribe(async (res) => {
     console.log(res);
     this.categorie = res;
   }, err => {
     console.log(err);

   })
  }
 async interpress(id: Number) {
   
    
    for (let i = 0; i < this.categorie.length; i++) {
      if (id === this.categorie[i]._id) {
        this.categorie[i].entry =!this.categorie[i].entry;
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
    for (let i = 0; i < this.categorie.length; i++) {
      console.log("categorie : : ",this.categorie[i]["entry"]);
      console.log("categorie : : ",this.categorie.length);

      this.categorie[i]["entry"]
        ? TableCategorie.push(this.categorie[i]._id)
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
