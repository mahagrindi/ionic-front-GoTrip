import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpService {
  //  192.168.30.253 192.168.1.12
  public ip = 'localhost';
  constructor() {}
}
