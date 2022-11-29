import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { IpService } from './ip.service';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private tokenService:TokenService,private http: HttpClient,private ipservice:IpService) {}
getUser(){return this.http.get(`http://${this.ipservice.ip}:3001/users/${this.tokenService.userData.value.userId}`);}
}

