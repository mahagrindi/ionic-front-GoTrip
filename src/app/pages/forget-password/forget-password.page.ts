import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Swiper, SwiperOptions, Virtual, Pagination } from 'swiper';
import { Router } from '@angular/router';
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
  //afficher la valeur des input du code dans le console
  //vérifier le code et revenir à la page connexion
  valueChange(ev) {
    console.log(ev.length);
    if (ev.length == 4) {
      this.router.navigate(['/login']);
    }
  }

  isSubmitted = false;
  EnterNumber: FormGroup;
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

  phone: string = '';

  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Saisir votre numéro de 8 chiffres' },
  ];
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
  onSubmit() {
    this.isSubmitted = true;
    if (!this.EnterNumber.valid) {
      console.log('Please provide all the required values!');
      console.log(this.config);
      return false;
    } else {
      console.log(this.EnterNumber.value);
      this.slideNext();
      this.config.enabled = true;
      console.log(this.config);
    }
  }
}
