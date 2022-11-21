import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerificationService } from 'src/app/services/verification.service';

const ip = 'localhost';
@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss'],
})
export class CodeModalComponent implements OnInit {
  constructor(
    private router: Router,
    private verificationService: VerificationService,
    private modalCtrl: ModalController
  ) {}
  code: number;
  num: any;
  token: string;
  // configuration des inputs du code
  configInput = {
    length: 4,
    placeholder: '#',
    allowNumbersOnly: true,
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };
  sendSMS() {
    return this.verificationService.sendSMS(this.num);
  }
  ngOnInit() {
    this.sendSMS().subscribe(
      async (res) => {
        this.code = await res['random'];
        console.log('num fel code ', this.num);
        console.log(this.code);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  //afficher la valeur des input du code dans le console
  //vérifier le code et aller à la page new password
  valueChange(ev: any) {
    if (ev == this.code) {
      this.verificationService.returnToken(this.num).subscribe(
        async (res) => {
          this.token = await res['token'];
          console.log(this.token);
          const navigationExtras: NavigationExtras = {
            state: {
              token: this.token,
              num: this.num,
            },
          };
          await this.router.navigate(['/change-password'], navigationExtras);
          this.modalCtrl.dismiss();
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
}
