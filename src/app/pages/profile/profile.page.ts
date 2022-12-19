import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  guide:any;
  constructor(private route: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.guide=history.state.guide;
 console.log(this.guide);
 
    
  }
  data = {
                "ratingNumber":"0",
                "listCategory":[{"_id":"6391f6301f0fc711426b4432",   "name":"Camping",    "icon":"camping.svg", "__v":{"$numberInt":"0"},    "entry":false},
                                {"_id":"6391f64f1f0fc711426b4436","name":"Fishing","icon":"fishing.svg",   "entry":false}],
                "workArea":[{"id":{"$numberInt":"1"},"nom":"Tunis"},{"id":{"$numberInt":"4"},"nom":"Monastir"}],

                "hourPrice": 21 ,
                "dayPrice": 100,
                "galerie":["image1.jpg","image2.jpg","image3.jpg"],


                "reservationType":[{"0":"2"},{"1":"7"}],



                "ListOfbestplace":["Marina Sousse","place2","place3","place4"],



                "verifiedStatus":["image_cin.jpg","b3.pdf"],


                "profilePicture":"profile1.jpg",

                 }

      user={ 
        "username":"dalida","email":"dalida@yahoo.com","phone":"35269845",
        "guide":true}

}
