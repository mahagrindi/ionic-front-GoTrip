import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.page.html',
  styleUrls: ['./error-modal.page.css'],
})
export class ErrorModalPage implements OnInit {

    constructor(private router: Router) {}
    num: number;
    ngOnInit() {}
  
    goToLogin() {
      console.log("history num ",history.state.num);
      
      const navigationExtras: NavigationExtras = {
        state: {
          num: history.state.num,
        },
      };
  
      this.router.navigate(['/login'], navigationExtras);
    }
  
    cancel() {
      this.router.navigate(['/forget-password']);
    }
  
    // confirm() {
    //   return this.modalCtrl.dismiss(this.name, 'confirm');
    // }
  }
  