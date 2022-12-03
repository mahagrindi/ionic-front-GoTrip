import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  user: any;
  constructor(private route: Router, private home: HomeServiceService) {
    this.getUser();
  }

  async getUser() {
    this.home.getUser().subscribe(
      (res) => {
        this.user = res;
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  verifGuide() {
    if (this.user) {
      if (this.user['guide'] === true) {
        return false;
      } else {
        return true;
      }
    }
  }
  switchGuide() {
    this.route.navigate(['/tabs/form-guide']);
  }

  isGuide = false;
  switchMode(event) {
    if (event.target.checked) {
      console.log('guide');
    } else console.log('tourist');
  }
}
