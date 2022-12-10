import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';
import { FunctionsService } from '../services/functions.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private func: FunctionsService,
    private auth: AuthService,
    private route: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map((user) => {
        if (!user) {
          //  this.func.dismissSplash();

          return true;
        } else {
          //  this.func.dismissSplash();
          this.route.navigate(['/tabs']);
          console.log('auth guard  yes');
        }
      })
    );
  }
}
