import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  constructor(private tokenService:TokenService,private http: HttpClient,private ipservice:IpService) {}
}
