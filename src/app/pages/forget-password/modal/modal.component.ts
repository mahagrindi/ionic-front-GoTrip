import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private router: Router, private modalCtrl: ModalController) {}
  num: number;
  ngOnInit() {}

  goToLogin() {
    const navigationExtras: NavigationExtras = {
      state: {
        num: this.num,
      },
    };

    this.router.navigateByUrl('/login', navigationExtras);
    return this.modalCtrl.dismiss(navigationExtras, 'confirm');
  }

  cancel() {
    return this.modalCtrl.dismiss();
  }

  goToHome() {
    this.router.navigate(['/tabs/home']);
    return this.modalCtrl.dismiss();
  }
  // confirm() {
  //   return this.modalCtrl.dismiss(this.name, 'confirm');
  // }
}
