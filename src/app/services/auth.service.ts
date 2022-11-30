import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class AuthService {
  ip = '192.168.1.12';
  public user: Observable<any>;
  private userData=new BehaviorSubject(null);
  constructor(private http: HttpClient,private storage:Storage,private plt:Platform) 
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

  conxGet(credentials: {passwordCnx:string,usernameCnx:string})
  {
    console.log(credentials);
    return this.http.get(`http://${this.ip}:3001/users/signin`, 
    {
      headers: {
        password:credentials.passwordCnx,
        username:credentials.usernameCnx,
      },
    }).pipe(
      take(1),
      map(res=>{
        console.log("token auth service",res['token']);
        
        return res['token'];
      }),switchMap(token =>{
        let decoded=helper.decodeToken(token);
        console.log("decocded",decoded);
        
        this.userData.next(decoded);
        let storageObs=from(this.storage.set(TOKEN_KEY,token));
        console.log("storageObs",storageObs);
        return storageObs;
      })
    );
  }
  inscriPost(user:any)
  {
    return this.http.post(`http://${this.ip}:3001/users/signup`,user).pipe(
      take(1),
      map(res=>{
        console.log("token auth service",res['token']);
        
        return res['token'];
      }),switchMap(token =>{
        let decoded=helper.decodeToken(token);
        console.log("decocded",decoded);
        
        this.userData.next(decoded);
        let storageObs=from(this.storage.set(TOKEN_KEY,token));
        console.log("storageObs",storageObs);
        return storageObs;
      })
    ); 
  }
  
}
