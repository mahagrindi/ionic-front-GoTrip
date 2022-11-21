import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper=new JwtHelperService();
const TOKEN_KEY ="token-key";

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  ip = '192.168.1.12';
  constructor(private http: HttpClient,private storage:Storage,private plt:Platform,private router:Router) { 
    this.storage.create();
  }
  public user: Observable<any>;
  private userData=new BehaviorSubject(null);
  verificationphone(EnterNumber:any){
  return  this.http.get(`http://${this.ip}:3001/verifications/verificationphone`, 
  {
    headers: { phone:EnterNumber},
  }) ;
  }


  sendSMS(num:any){
    console.log("num fil service",num);
    
    return this.http.get(`http://${this.ip}:3001/verifications/sendsms`, 
    {
      headers: { phone:num},
    });
  }


  returnToken(num:any){
    return this.http.get(`http://${this.ip}:3001/verifications/${num}`).pipe(
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
