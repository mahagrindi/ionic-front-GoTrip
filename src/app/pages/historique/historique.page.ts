import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  AllPrivateTrip:any;
  AllPrivateTripForGuide:any[]=[];
  AllPrivateTripForUser:any[]=[];
  constructor(private guideService: GuideService,private route: Router , private token: TokenService)
   {
    this.guideService.getAllPrivateTrip().subscribe(res=>{
      this.AllPrivateTrip=res;
      for (let element of this.AllPrivateTrip)
      {
        if(element.guideId==this.guideService.GuideId)
        {
          this.AllPrivateTripForGuide.push(element);
        }
        if(element.MembreReserver==this.token.userData.value.userId)
        {
          this.AllPrivateTripForUser.push(element);
        }
      }
    },err=>console.log(err));
   }
   showDetailsTrip(trip:any) { 
    const navigationExtras: NavigationExtras = {
      state: {
        trip:trip,
      },
    };
    this.route.navigate(['/event'],navigationExtras);
  }
  verifGuide() {
    if (this.token.modeData) {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit() {}

}
