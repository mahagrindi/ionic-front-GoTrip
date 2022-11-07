import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share/share.module';
import { SplashComponent } from './components/splash/splash.component';
import { LottieModule } from 'ngx-lottie';
import { HttpClientModule } from '@angular/common/http';
// import { NavbarComponent } from './components/navbar/navbar.component';
import player from 'lottie-web';

export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [AppComponent, SplashComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    ShareModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
