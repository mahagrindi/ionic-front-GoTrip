import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
 
  trip:any[]=[];
  tripsub:any;
  constructor(private guide:GuideService,private func: FunctionsService) {
   this.guide.getPropTrip().subscribe(async res=>{
    this.tripsub=res;
   await this.VerifEtatTrip(this.tripsub);
  },err=>console.log(err));}

  ngOnInit() {}
async  VerifEtatTrip(guideTab:any){
 for( let element of guideTab)
 {
  if(element.etat==null)
  {
    for(let elm of element.guideIdProposed)
    {
      if(elm._id==this.guide.GuideId)
      {
        if(elm.etat==false)
        {   
         this.trip.push(element);  
        }
      }
    }
    
  }
 

 }}

 async refuseTrip(trip:any)
 {
   
   for(let element of trip.guideIdProposed)
   {
    if(element._id==this.guide.GuideId)
    {
      element.etat=true;
    }
   
    
   }
   this.guide.updateStatusTrip(trip).subscribe(res=>console.log(res),err=>console.log(err));
   window.location.reload();
   this.func.presentSplash();
   setTimeout(() => {
   this.func.dismissSplash();
  }, 200); 
 }
 async acceptTrip(trip:any)
 {
  // console.log(trip);
  
  trip.etat= true;
  this.guide.updateStatusTripPrincipale(trip).subscribe(res=>console.log(res),err=>console.log(err));
  if(trip.typeCircuit=="true")
  {
   let publicTrip=
    {
      name:trip.name,
      dateCircuit:trip.dateCircuit,
      localization:trip.localization,
      guideId:this.guide.GuideId,
      totalplaceNumber:trip.totalplaceNumber,
      imgGroup:trip.imgGroup,
      category:trip.category,
      ListMembreReserver:[trip.idUser]
    }
    // console.log(publicTrip);
    this.guide.PostPublicTrip(publicTrip).subscribe(res=>console.log(res),err=>console.log(err));
    // console.log("public");
    
  }
  else
  {
    let privateTrip=
    {
      name:trip.name,
      dateCircuit:trip.dateCircuit,
      localization:trip.localization,
      guideId:this.guide.GuideId,
      totalplaceNumber:trip.totalplaceNumber,
      imgGroup:trip.imgGroup,
      category:trip.category,
      MembreReserver:trip.idUser
    }
    // console.log(privateTrip);
    this.guide.PostPrivateTrip(privateTrip).subscribe(res=>console.log(res),err=>console.log(err));
    // console.log("private");
    
  }
  
 await this.func.presentSplash();
  setTimeout(() => {
  this.func.dismissSplash();
 }, 200); 
 window.location.reload();
 }

}
