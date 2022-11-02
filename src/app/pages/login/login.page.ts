import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination } from 'swiper';
import {HttpClient} from '@angular/common/http';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 1, //par défaut 1
    //spaceBetween: 50,
    pagination: true,
  };

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }
  constructor(private http:HttpClient) {
    if(!isPlatform('capacitor'))
    {
      GoogleAuth.initialize();
    }
  }
  user=null;
  name: string = '';
  email: string = '';
  password: string = '0';
  confirm_password: string = '';
  ngOnInit(): void {
    console.log("hello login ");
  }  

  onSubmit() {
    alert(
      this.name +
        ', ' +
        this.email +
        ', ' +
        this.password +
        ', ' +
        this.confirm_password
    );
  }
 async login()
  {
    alert("this.user");
  
 
   this.user= await GoogleAuth.signIn().catch(error=>{alert(error)});
  
   alert(this.user);
   console.log("eee") 
   /* let user={
      password:this.password,
      nom:this.name,
      prenom:'achraf',
      tel:'22261484',
      sexe:'Homme',
    }
    alert("hello login")
    this.http.post('http://127.0.0.1:3001/users/signup',user).subscribe(res=>{
      alert(res)
      console.log(res)
    },err =>
    {
      alert(err.error)
      console.log(err.error);
    })
     */


  }
}
