import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { Platform } from '@ionic/angular';
import { map, switchMap, take } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

const TOKEN_KEY ="token-key";
@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  ip = '192.168.1.12';

  constructor(private http: HttpClient,private plt:Platform,private storage:Storage) 
  {}
  token:any;
  modify(num:any,password:any)
  {
    return this.http
    .patch(`http://${this.ip}:3001/verifications/${num}`,{ password:`${password}` });

  }
}
