import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper=new JwtHelperService();
const TOKEN_KEY ="token-key";
const MODE_KEY = 'mode-key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public user: Observable<any>;
  public userData=new BehaviorSubject(null);
  public modeData:boolean=null;
  constructor(private storage:Storage,private plt:Platform) 
  {
    this.storage.create();
    this.loadStoredToken();
   
  }

  loadStoredToken(){
    let platformObs=from(this.plt.ready());    
   this.user= platformObs.pipe(
    take(1),
    switchMap(()=>{
      return from(this.storage.get(TOKEN_KEY))
    }),map(token=>{
      console.log("token ach sevice token ",token);
      
      if(token){

         let decoded=helper.decodeToken(token);
         this.userData.next(decoded);
         return true;
      }else{ 
        return null;
      }

    })
   )
   this.storage.get(MODE_KEY).then(res=>this.modeData=res);   
  } 
  updateMode(){
    this.storage.get(MODE_KEY).then(value => {
     
  
       // Modify just that property
      //  value.toggleDates = true;
         value=!value
       // Save the entire data again
       this.storage.set(MODE_KEY, value);
      console.log("Mode value",value);
      
  });
  }
}
