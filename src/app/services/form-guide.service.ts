import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IpService } from './ip.service';
const helper = new JwtHelperService();
const TOKEN_KEY = 'token-key-guide';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class FormGuideService {

  constructor(
    private tokenService:TokenService,
    private http: HttpClient,
    private ipservice:IpService,
    private storage: Storage,
    private plt: Platform
    ) {     this.storage.create();    }
    conxGet() {
      return this.http
        .get(`http://${this.ipservice.ip}:3001/guides/signin`, {
          headers: {
            userId:this.tokenService.userData.value.userId,
          },
        })
        .pipe(
          take(1),
          map((res) => {
            return res['token'];
          }),
          switchMap((token) => {
            let storageObs = from(this.storage.set(TOKEN_KEY, token));
            return storageObs;
          })
        );
    }
    inscriPost(guide: any) {
      return this.http
        .post(`http://${this.ipservice.ip}:3001/guides/signup`, guide)
        .pipe(
          take(1),
          map((res) => {
            return res['token'];
          }),
          switchMap((token) => {
            let storageObs = from(this.storage.set(TOKEN_KEY, token));
            return storageObs;
          })
        );
    }
    modifyStatusUser() {
      return this.http.patch(
        `http://${this.ipservice.ip}:3001/users/updateGuidePass`,
        { guide: `${true}` }
      );
    }

}
