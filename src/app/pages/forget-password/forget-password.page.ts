import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VerificationService } from 'src/app/services/verification.service';
import { NavigationExtras, Router } from '@angular/router';
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
  constructor(
    private formBuilder: FormBuilder,
    private Verificationservice:VerificationService,
    private router: Router
  ) {}
  num: number;
  

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
  message = 'test';
  
  
 

 
 
  verifNum() {

  this.Verificationservice.verificationphone(this.EnterNumber.value['phone'])
     .subscribe(
      async (res) => {
         const navigationExtras: NavigationExtras = {
          state: {
            num: this.EnterNumber.value['phone'],
          },
        };
        await this.router.navigate(['/codeModal'], navigationExtras);
     

       },
      async (err) => {
        const navigationExtras: NavigationExtras = {
          state: {
            num: this.EnterNumber.value['phone'],
          },
        };
        await this.router.navigate(['/errorModal'], navigationExtras);
      
       }
     );
    
     

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
    }
  }
}
