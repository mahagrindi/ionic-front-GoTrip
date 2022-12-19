import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
  testData: any;
  LastChance: any;
  user: any;
  allGuideCollection = [];

  constructor(
    private route: Router,
    private home: HomeServiceService,
    private token: TokenService,
    private guideService: GuideService
  ) {
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
        img: 'profile2_img2.jpg',
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
    this.LastChance = [
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
        img: 'profile2_img2.jpg',
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
    this.getUser();
    this.getAllGuide();
  }

  ngOnInit() {}
  getAllGuide() {
    let AllGuide: any = [];
    let guideName: any = [];
    this.guideService.getNameGuide().subscribe((res) => (guideName = res));
    this.guideService.getAllGuide().subscribe(async (res) => {
      AllGuide = res;
      await AllGuide.forEach(async (element) => {
        await guideName.forEach((elm) => {
          if (elm._id == element.idUser) {
            this.allGuideCollection.push({
              _id: element._id,
              username: elm.username,
              profilePicture: element.profilePicture,
              workArea: element.workArea,
              dayPrice: element.dayPrice,
              fev: 'not_checked',
              ratingNumber: element.ratingNumber,
              galerie:element.galerie,
              reservationType:element.reservationType,
              hourPrice:element.hourPrice,
              ListOfbestplace:element.ListOfbestplace,
              listCategory:element.listCategory
            });
          }
        });
      });
      console.log(this.allGuideCollection);

    });
  }

  getUser() {
    this.home.getUser().subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  verifGuide() {
    if (this.token.modeData) {
      return false;
    } else {
      return true;
    }
  }
  verifUser() {
    if (this.user) {
      return true;
    }
    return false;
  }
  favoris(id: any) {
    for (let i = 0; i <= this.LastChance.length - 1; i++) {
      console.log(this.LastChance[i].id);
      if (id === this.LastChance[i].id) {
        console.log(this.LastChance[i].fev);
        if ('checked' === this.LastChance[i].fev) {
          this.LastChance[i].fev = 'not_checked';
        } else {
          this.LastChance[i].fev = 'checked';
        }
      }
    }
  }
  showDetails() {
    this.route.navigate(['/event']);
  }
  showDetailsGuide(guide: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        guide:guide,
      },
    };
    this.route.navigate(['/profile'],navigationExtras);
  }
  showDetailsNotification() {
    // this.route.navigate(['/login']);
    this.route.navigate(['/notification']);
  }

  creatTrip() {
    this.route.navigate(['/createevent']);
  }

  //   *********** fonction de recherche *************
  //   ***************************************************
  // ******************************************************
  // public data = [
  //   'Amsterdam',
  //   'Buenos Aires',
  //   'Cairo',
  //   'Geneva',
  //   'Hong Kong',
  //   'Istanbul',
  //   'London',
  //   'Madrid',
  //   'New York',
  //   'Panama City',
  // ];
  // public results = [...this.data];

  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  // }

  // *********** fonction de recherche *************
  //   ***************************************************
  // ******************************************************

  favorisrec(id: any) {
    for (let i = 0; i <= this.testData.length - 1; i++) {
      console.log(this.testData[i].id);
      if (id === this.testData[i].id) {
        console.log(this.testData[i].fev);
        if ('checked' === this.testData[i].fev) {
          this.testData[i].fev = 'not_checked';
        } else {
          this.testData[i].fev = 'checked';
        }
      }
    }
  }
}
