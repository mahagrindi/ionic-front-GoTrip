import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from '../components/splash/splash.component';
@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  constructor(private modalController: ModalController) {}

  async presentSplash() {
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class',
    });
    
    return await modal.present();
  }


  async dismissSplash(){
    setTimeout(() => {
      this.modalController.dismiss().catch(err=>console.log(err)
      );
    },2000) 
  }
}

