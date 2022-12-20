import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from '../services/functions.service';
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
    private token: TokenService,
    private func: FunctionsService
  ) {
    this.getUser();
  }

  ngOnInit() {}
  async getUser() {
    this.home.getUser().subscribe(
      (res) => {
        this.user = res;
        // console.log(this.user);
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

  verifGuidemode() {
    if (this.token.modeData) {
      return true;
    } else {
      return false;
    }
  }
  switchGuide() {
    this.route.navigate(['/tabs/form-guide']);
  }
 async deconnexion() {
    this.token.clearStorage();
    window.location.reload();
    this.route.navigate(['/']);
  }

  isGuide: boolean = this.token.modeData;
  async switchMode(event: any) {
    if (event.target.checked) {
      this.func.presentSplash();
      // console.log('guide');
      this.token.updateMode();
    } else {
      this.func.presentSplash();
      this.token.updateMode();
      // console.log('tourist');
    }
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
}
