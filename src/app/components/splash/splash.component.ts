import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {
  constructor(private modalController: ModalController) {}
  options: AnimationOptions = {
    path: 'assets/splash-location.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log("hello splash");
  }

  ngOnInit() {}
 async dismissComponent()
  {
  return await this.modalController.dismiss();
  }
}
