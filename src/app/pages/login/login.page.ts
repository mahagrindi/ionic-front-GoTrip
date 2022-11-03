import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FunctionsService } from 'src/app/services/functions.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  loginForm: FormGroup;
  InscriptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private func: FunctionsService
  ) {}

  config: SwiperOptions = {
    slidesPerView: 1, //par défaut 1
    //spaceBetween: 50,
    pagination: false,
  };

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }

  username: string = '';
  phone: string = '';
  email: string = '';
  sexe: string = '';
  password: string = '';
  isSubmitted = false;
  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Vérifier le format du champ' },
  ];
  ngOnInit(): void {
    console.log('yosra');
    this.func.presentSplash();
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^\\d{8}$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      sexe: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.InscriptionForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  get errorControl() {
    return this.loginForm.controls;
  }
  onSubmitInscription() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.loginForm.value);
    }
  }

  onSubmitCnx() {
    this.isSubmitted = true;
    if (!this.InscriptionForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.InscriptionForm.value);
    }
  }
}
