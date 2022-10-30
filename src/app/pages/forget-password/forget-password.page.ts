import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination } from 'swiper';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  EnterNumber: FormGroup;
  config: SwiperOptions = {
    slidesPerView: 1, //par défaut 1
    //spaceBetween: 50,
    pagination: true,
  };

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  phone: string = '';
  isSubmitted = false;
  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Saisir votre numéro de 8 chiffres' },
  ];
  get errorControl() {
    return this.EnterNumber.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.EnterNumber = this.formBuilder.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^\\d{8}$'),
          Validators.maxLength(8),
        ],
      ],
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.EnterNumber.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.EnterNumber.value);
      this.slideNext();
    }
  }
}
