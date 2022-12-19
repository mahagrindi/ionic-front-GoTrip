import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { from } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { IpService } from './ip.service';
const TOKEN_KEY = 'token-key-guide';
const MODE_KEY = 'mode-key';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class FormGuideService {

  constructor(
    private http: HttpClient,
    private ipservice:IpService,
    private storage: Storage,
    ) {     this.storage.create();    }
    conxGet(userId:any) {
      // console.log("hello guide");
      
      return this.http
        .get(`http://${this.ipservice.ip}:3001/guides/signin`, {
          headers: {
            userId:userId,
          },
        })
        .pipe(
          take(1),
          map((res) => {
            return res['token'];
          }),
          switchMap((token) => {
            // console.log("token guide set",token);
            
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
            from(this.storage.set(MODE_KEY, true));
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
