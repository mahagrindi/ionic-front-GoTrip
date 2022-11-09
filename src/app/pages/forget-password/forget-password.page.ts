import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination } from 'swiper';
import { NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  // configuration des inputs du code
  configInput = {
    length: 4,
    placeholder: '#',
    allowNumbersOnly: true,
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };
  phone: string = '';
  isSubmitted = false;
  EnterNumber: FormGroup;
  NewPassword: FormGroup;
  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Vérifier le format du champ' },
  ];
  //afficher la valeur des input du code dans le console
  //vérifier le code et aller à la page new password
  valueChange(ev) {
    console.log(ev.length);
    if (ev.length == 4) {
      this.router.navigate(['/change-password']);
    }
  }

  //config swiper
  config: SwiperOptions = {
    slidesPerView: 1, //par défaut 1
    pagination: false,
    enabled: true,
  };

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  get errorControl() {
    return this.EnterNumber.controls;
  }
  constructor(private formBuilder: FormBuilder, private router: Router) {}

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

  verifNum() {
    if (this.EnterNumber.value == 12345678) {
      console.log(this.EnterNumber.value);
    } else {
    }
  }

  goToLogin() {
    const navigationExtras: NavigationExtras = {
      state: {
        num: this.EnterNumber.value,
      },
    };
    this.router.navigateByUrl('/login', navigationExtras);
  }
  //on submit phone
  onSubmit() {
    this.isSubmitted = true;
    if (!this.EnterNumber.valid) {
      console.log('Please provide all the required values!');
      console.log(this.config);
      return false;
    } else {
      this.verifNum();
      // this.slideNext();
      // this.config.enabled = true;
      // console.log(this.config);
    }
  }
}
