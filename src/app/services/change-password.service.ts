import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  constructor(private http: HttpClient,private ipservice:IpService) 
  {}
  modify(num:any,password:any)
  {
    return this.http
    .patch(`http://${this.ipservice.ip}:3001/verifications/${num}`,{ password:`${password}` });

  }
}
