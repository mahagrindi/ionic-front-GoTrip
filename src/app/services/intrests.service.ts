import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class IntrestsService {
  constructor(private tokenService:TokenService,private http:HttpClient,private ipservice:IpService) 
  {
  }

  updateRecomemnd(recommended:any)
  {    return this.http
    .patch(`http://${this.ipservice.ip}:3001/users/${this.tokenService.userData.value.userId}`,JSON.stringify({recommended:recommended}));
  }
}
