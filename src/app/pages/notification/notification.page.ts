import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
 
  trip:any[]=[];
  tripsub:any;
  constructor(private guide:GuideService) {
   this.guide.getPropTrip().subscribe(async res=>{
    this.tripsub=await res;
    console.log("trip sub",this.tripsub);
   await this.VerifEtatTrip(this.tripsub);
   console.log("trip : ",this.trip);
   

  },err=>console.log(err));}

  ngOnInit() { console.log(this.guide.GuideId);}
async  VerifEtatTrip(guideTab:any){
 for( let element of guideTab)
 {
  for(let elm of element.guideIdProposed)
if(elm._id==this.guide.GuideId)
{
  console.log("hello");
  if(elm.etat==false)
  {   
    console.log(element);
    
   this.trip.push(element);  
  }
}
 }
 
 
  }

}
