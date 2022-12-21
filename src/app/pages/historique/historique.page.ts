import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  AllPrivateTrip:any;
  AllPrivateTripForGuide:any[]=[];
  constructor(private guideService: GuideService,private route: Router )
   {
    this.guideService.getAllPrivateTrip().subscribe(res=>{
      this.AllPrivateTrip=res;
      for (let element of this.AllPrivateTrip)
      {
        if(element.guideId==this.guideService.GuideId)
        {
          this.AllPrivateTripForGuide.push(element);
        }
      }
      console.log(this.AllPrivateTripForGuide);
      
     
    },err=>console.log(err));
   }
   showDetailsTrip(trip:any) {
    // console.log(trip);
    
    const navigationExtras: NavigationExtras = {
      state: {
        trip:trip,
      },
    };
    this.route.navigate(['/event'],navigationExtras);
  }
  ngOnInit() {}

}
