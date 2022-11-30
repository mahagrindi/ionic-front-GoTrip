import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VerificationService } from 'src/app/services/verification.service';
@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.page.html',
  styleUrls: ['./code-modal.page.css'],
})
export class CodeModalPage implements OnInit {
    constructor(
      private router: Router,
      private verificationService: VerificationService,
      private modalCtrl: ModalController,
      private route: ActivatedRoute, 
    ) {

      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.num = this.router.getCurrentNavigation().extras.state.num;
        }
      });
    }
    
    code: number;
    num: any;
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
    ngOnInit():void {
      console.log("hello from code page ");
      
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
    valueChange(ev:any) {
            if (ev == this.code) {
        this.verificationService.returnToken(this.num).subscribe(
          async () => {
            const navigationExtras: NavigationExtras = {
              state: {
                num: this.num,
              },
            };
            await this.router.navigate(['/change-password'], navigationExtras);
            this.modalCtrl.dismiss();          },
          (err) => {
            console.log(err.error);
          }
        );
      }
    }
  }