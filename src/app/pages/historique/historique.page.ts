import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  AllPrivateTrip:any;
  AllPrivateTripForGuide:any[]=[];
  constructor(private guideService: GuideService)
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

  ngOnInit() {}

}
