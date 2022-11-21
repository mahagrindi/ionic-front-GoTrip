import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

const ip = 'localhost';
@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss'],
})
export class CodeModalComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalCtrl: ModalController
  ) {}
  code: number;
  num: number;
  token: string;
  // configuration des inputs du code
  configInput = {
    length: 4,
    placeholder: '#',
    allowNumbersOnly: true,
    inputStyles: {
      width: '51px',
      height: '50px',
    },
  };

  ngOnInit() {
    console.log('num fel code ', this.num);
    console.log(this.code);
  }

  //afficher la valeur des input du code dans le console
  //vérifier le code et aller à la page new password
  valueChange(ev) {
    console.log(ev);
    if (ev == this.code) {
      console.log('yess 4');
      this.http.get(`http://${ip}:3001/verifications/${this.num}`).subscribe(
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
