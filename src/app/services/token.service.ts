import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGuideService } from './form-guide.service';

const helper=new JwtHelperService();
const TOKEN_KEY ="token-key";
const MODE_KEY = 'mode-key';
const TOKEN_KEY_Guide = 'token-key-guide';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public user: Observable<any>;
  public userData=new BehaviorSubject(null);
  public modeData:boolean=false;
  public GuideToken:any;

  constructor(private storage:Storage,private plt:Platform , private guideService:FormGuideService) 
  {
    this.storage.create();
    this.loadStoredToken();
    this.storage.get(MODE_KEY).then(res=>this.modeData=res);
    this.storage.get(TOKEN_KEY_Guide).then(res=>this.GuideToken=res);
   
  }

  loadStoredToken(){
    let platformObs=from(this.plt.ready());    
   this.user= platformObs.pipe(
    take(1),
    switchMap(()=>{
      return from(this.storage.get(TOKEN_KEY))
    }),map(token=>{
      
      if(token){

         let decoded=helper.decodeToken(token);
         this.userData.next(decoded);
         this.guideService.conxGet(this.userData.value.userId).subscribe(res=>{});
         return true;
      }else{ 
        return null;
      }

    })
   )

  } 
  updateMode(){
    this.storage.get(MODE_KEY).then(value => {
     
  
       // Modify just that property
      //  value.toggleDates = true;
         value=!value
       // Save the entire data again
       this.storage.set(MODE_KEY, value);
      // console.log("Mode value",value);
      
  });
  }
}
