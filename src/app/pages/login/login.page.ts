import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { FunctionsService } from 'src/app/services/functions.service';
import { HttpClient } from '@angular/common/http';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

const ip = '192.168.246.203';
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
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private func: FunctionsService,
    private route: Router,
    private Actroute: ActivatedRoute
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  user = null;
  email: string = '';
  password: string = '';
  username: string = '';
  phone: string = '';
  sexe: string = '';
  usernameCnx: string = '';
  passwordCnx: string = '';
  isSubmitted = false;
  numero: any;

  errors = [
    { type: 'required', message: 'Champ Obligatoire !' },
    { type: 'pattern', message: 'Vérifier le format du champ' },
  ];

  ngOnInit(): void {
    // this.func.presentSplash();
    this.InscriptionForm = this.formBuilder.group({
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

    this.loginForm = this.formBuilder.group({
      usernameCnx: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$'),
        ],
      ],
      passwordCnx: ['', [Validators.required]],
    });
  }

  ionViewDidEnter(): void {
    console.log('history', history.state.num);
    if (history.state.num) {
      this.swiper.swiperRef.slideNext(0);
      this.phone = history.state.num;
      this.email = '';
      this.password = '';
      this.username = '';
      this.sexe = '';
      this.usernameCnx = '';
      this.passwordCnx = '';
      this.isSubmitted = false;
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }
  async onSubmitCnx() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      await this.http
        .get('http://' + ip + ':3001/users/signin', {
          headers: {
            password: this.passwordCnx,
            username: this.usernameCnx,
          },
        })
        .subscribe(
          (res) => {
            this.route.navigate(['/tabs']);
            console.log(res);
          },
          (err) => {
            console.log(err.error);
          }
        );
      console.log(this.loginForm.value);
    }
  }

  async onSubmitInscription() {
    this.isSubmitted = true;
    if (!this.InscriptionForm.valid) {
      console.log('Please provide all the required values!');

      return false;
    } else {
      let user = {
        password: this.password,
        username: this.username,
        email: this.email,
        phone: this.phone,
        sexe: this.sexe,
      };
      await this.http
        .post('http://' + ip + ':3001/users/signup', user)
        .subscribe(
          (res) => {
            this.route.navigate(['/tabs']);
            console.log(res);
          },
          (err) => {
            console.log(err.error);
          }
        );

      console.log(this.InscriptionForm.value);
    }
  }
  async loginGoogle() {
    this.user = await GoogleAuth.signIn().catch((error) => {});
    console.log(this.user);

    console.log(this.user);
  }
}
