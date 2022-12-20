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
    this.tripsub=res;
   await this.VerifEtatTrip(this.tripsub);
  },err=>console.log(err));}

  ngOnInit() {}
async  VerifEtatTrip(guideTab:any){
 for( let element of guideTab)
 {
  for(let elm of element.guideIdProposed)
if(elm._id==this.guide.GuideId)
{
  if(elm.etat==false)
  {   
   this.trip.push(element);  
  }
}
 }}

}
