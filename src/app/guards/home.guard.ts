import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { FunctionsService } from '../services/functions.service';


@Injectable({
  providedIn: 'root'
})

export class HomeGuard implements CanActivate {
  constructor(private func: FunctionsService,private tokenService:TokenService,private route:Router){ }
  canActivate(): Observable<boolean> {
    return this.tokenService.user.pipe(
      take(1),
      map(user =>{
        if(!user)
        {
        //  this.func.dismissSplash();
          this.route.navigate(['/intro']);
          return true;
        }else{ 
        //  this.func.dismissSplash();
          console.log("home guard  yes");
        
        }
        
        
      })
      
    );
  }
  
}

  