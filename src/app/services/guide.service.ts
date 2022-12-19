import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';
import { Storage } from '@ionic/storage-angular';
const TOKEN_KEY_Guide = 'token-key-guide';
@Injectable({
  providedIn: 'root'
})
export class GuideService {
  public GuideToken:any;

  constructor(private http: HttpClient,private ipservice:IpService,private storage:Storage) {  this.storage.get(TOKEN_KEY_Guide).then(res=>this.GuideToken=res);}
  getAllGuide()
  {
    return this.http.get(`http://${this.ipservice.ip}:3001/guides/getAllGuide`);
  }
  getNameGuide()
  { 
   return  this.http.get(`http://${this.ipservice.ip}:3001/users/getAllNameUser`);
   
  }
  getPropTrip()
  { 
   return  this.http.get(`http://${this.ipservice.ip}:3001/proposedCircuits/getAllProposedCircuit`);
   
  }
  

}
