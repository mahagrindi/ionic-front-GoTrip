import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  user: any;
  constructor(
    private route: Router,
    private home: HomeServiceService,
    private token: TokenService
  ) {
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

  isGuide: boolean = this.token.modeData;
  switchMode(event: any) {
    if (event.target.checked) {
      console.log('guide');
      this.token.updateMode();
    } else {
      this.token.updateMode();
      console.log('tourist');
    }
  }
}
