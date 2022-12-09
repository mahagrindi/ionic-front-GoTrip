import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private http:HttpClient,private ipservice:IpService) {}
  postCircuit(circuit:any)
  {
    return this.http.post(`http://${this.ipservice.ip}:3001/proposedCircuits/setProposedCircuit`,circuit);
  }
  
}
