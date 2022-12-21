import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  allTrip: any = [];
  allGuideCollection = [];
  results = [];
  resultsGuide = [];
  constructor(private guide: GuideService, private home: HomeServiceService) {
    this.getAllGuide();
    this.home.getAllPublicTrip().subscribe(
      (res) => {
        this.allTrip = res;
        this.results = [...this.allTrip];
      },
      (err) => console.log(err)
    );
  }

  getAllGuide() {
    let AllGuide: any = [];
    let guideName: any = [];
    this.guide.getNameGuide().subscribe((res) => (guideName = res));
    this.guide.getAllGuide().subscribe(async (res) => {
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
              galerie: element.galerie,
              reservationType: element.reservationType,
              hourPrice: element.hourPrice,
              ListOfbestplace: element.ListOfbestplace,
              listCategory: element.listCategory,
            });
          }
        });
      });
      this.resultsGuide = [...this.allGuideCollection];
    });
  }
  search(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.allTrip.filter(
      (d) => d.localization.toLowerCase().indexOf(query) > -1
    );
    this.resultsGuide = this.allGuideCollection.filter(
      (dg) => dg.workArea[0].nom.toLowerCase().indexOf(query) > -1
    );
  }
  ngOnInit() {}
}
