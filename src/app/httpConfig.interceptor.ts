import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './components/splash/splash.component';
import { Storage } from '@ionic/storage-angular';
const TOKEN_KEY = 'token-key';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  loaderToShow: boolean = false;
  constructor(
    private modalController: ModalController,
    private storage: Storage
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /* this.modalController.getTop().then(hasLoading =>{
        if(!hasLoading){
            this.modalController.create({
                component: SplashComponent,
                cssClass: 'my-custom-class', 
            }).then(loading => loading.present());
        }
      });*/

    return from(this.storage.get(TOKEN_KEY)).pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token),
          });
        }

        if (!request.headers.has('Content-Type')) {
          request = request.clone({
            headers: request.headers.set('Content-Type', 'application/json'),
          });
        }

        return next.handle(request).pipe(
          catchError((err) => {
            if (err instanceof HttpErrorResponse) {
              switch ((<HttpErrorResponse>err).status) {
                case 401:
                // this.modalController.dismiss();
                default:
                  return throwError(err);
              }
            } else {
              return throwError(err);
            }
          }),
          map((event: HttpEvent<any>) => {
            return event;
          }),

          catchError((err) => {
            // this.modalController.dismiss();
            return throwError(err);
          })
        );
      })
    );
  }
}
