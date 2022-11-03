import { Component, OnInit } from '@angular/core';
import {  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomePage   {

  reclider = {
    freeMode : true ,
    slidesPerView : 1.3 ,
    slidesOffsetBefore : 11 ,
    spaceBetween : 10 ,

  };


  testData: any;
  LastChance : any ;

  constructor() {

      this.testData=[
    {id:1 , price : '35 DT ' , fev: 'checked' , img : '../../../assets/images/home/img1.jpg' , nbreStarts : 4 ,locations:'saw' ,name:'Prithivi'},
    {id:3 , price : '35 DT ' , fev: 'checkednon' , img : '../../../assets/images/home/stay-in-tunis-e1555423387390.jpg' , nbreStarts : 5 ,locations:'saw2',name:'malliga'},
    {id:3 , price : '35 DT ' , fev: 'checked' , img : '../../../assets/images/home/img1.jpg' , nbreStarts : 2 ,locations:'saw2',name:'Gowdaman'},
    {id:3 , price : '35 DT ' , fev: 'checkednon' , img : '../../../assets/images/home/stay-in-tunis-e1555423387390.jpg' , nbreStarts : 2 ,locations:'saw2',name:'Neethi'},
    {id:3 , price : '35 DT ' , fev: 'checked' , img : '../../../assets/images/home/stay-in-tunis-e1555423387390.jpg' , nbreStarts : 5 ,locations:'saw2',name:'abirami1'},
    ];


    this.LastChance=[
      {id:1 , nbPlace : 5 , fev: '' ,price : '35 DT '  , img : '../../../assets/images/home/lastChance/image1.jpg' , nbreStarts : 4 ,locations:'saw' ,name:'Prithivi'},
      {id:3 , nbPlace : 5 , fev: '-outline' ,  price : '35 DT ' ,  img : '../../../assets/images/home/lastChance/image2.jpg' , nbreStarts : 5 ,locations:'saw2',name:'malliga'},
      {id:4 , nbPlace : 5 , fev: '' ,  price : '35 DT '  , img : '../../../assets/images/home/lastChance/image3.jpg' , nbreStarts : 2 ,locations:'saw2',name:'Gowdaman'},
     ];

  }

  favoris(id){
    for(let i = 0; i <= this.LastChance.length-1; i++){

          console.log( this.LastChance[i].id);
            if ( id === this.LastChance[i].id){
              console.log( this.LastChance[i].fev);
              if ( '-outline' === this.LastChance[i].fev){
                this.LastChance[i].fev = '';
              }else{
                this.LastChance[i].fev = '-outline';
              };
            };
     } ;
  }

  favorisrec(id){
    for(let i = 0; i <= this.testData.length-1; i++){

          console.log( this.testData[i].id);
            if ( id === this.testData[i].id){
              console.log( this.testData[i].fev);
              if ( 'checked' === this.testData[i].fev){
                this.testData[i].fev = 'checkednon';
              }else{
                this.testData[i].fev = 'checked';
              };
            };
     } ;
  }
}
