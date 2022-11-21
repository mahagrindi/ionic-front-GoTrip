import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { LottieModule } from 'ngx-lottie';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './httpConfig.interceptor';
import { ModalComponent } from './pages/forget-password/modal/modal.component';
import { CodeModalComponent } from './pages/forget-password/code-modal/code-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicStorageModule } from '@ionic/storage-angular';
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    ModalComponent,
    CodeModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    IonicStorageModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
