import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper=new JwtHelperService();
const TOKEN_KEY ="token-key";
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public user: Observable<any>;
  public userData=new BehaviorSubject(null);
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
      console.log("token ach",token);
      
      if(token){

         let decoded=helper.decodeToken(token);
         this.userData.next(decoded);
         return true;
      }else{ 
        return null;
      }

    })
   )
  } 
}
