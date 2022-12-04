import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination } from 'swiper';
import { FunctionsService } from 'src/app/services/functions.service';
import { AuthService } from 'src/app/services/auth.service';
SwiperCore.use([Virtual, Pagination]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 1, //par défaut 1
    //spaceBetween: 50,
    pagination: true,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
  };
  constructor(private func: FunctionsService,private authservice:AuthService) {}

  ngOnInit() {
    this.func.presentSplash();
    this.func.dismissSplash();
  }
}
