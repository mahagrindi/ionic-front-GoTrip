import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notification: any[];
  trip:any;
  constructor(private guide:GuideService) {
    this.notification = [{
      name : "Trip to Bizerte" ,
      dateCircuit : "11/12/2022"   ,
      localization: "Bizerte",

      totalplaceNumber: "5",
      imgGroup:["img1.jpg","Sidi-Bou-Said-1.jpg"],
      activit : ["beach" , "camping"] ,
      typeCircuit :"Privet",
    },
    {
      name : "Trip to Tunis" ,
      dateCircuit : "11/12/2022"   ,
      localization: "Bizerte",

      totalplaceNumber: "5",
      imgGroup:["stay-in-tunis-e1555423387390.jpg","img1.jpg"],
      activit : ["fishing" , "forest","mountain"] ,
      typeCircuit :"public",
    }

    ]
   this.guide.getPropTrip().subscribe(res=>{this.trip=res; console.log(this.trip);},err=>console.log(err));
   }

  ngOnInit() {}
  VerifEtatTrip(etat:any){
    if(etat=="false")
    {
      return false;
    }else{
      return true;
    }
  }

}
