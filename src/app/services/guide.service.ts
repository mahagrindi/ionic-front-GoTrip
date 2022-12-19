import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  constructor(private tokenService:TokenService,private http: HttpClient,private ipservice:IpService) {}
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
