import { Component, OnInit } from '@angular/core';
import { IntrestsService } from 'src/app/services/intrests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intrests',
  templateUrl: './intrests.page.html',
  styleUrls: ['./intrests.page.scss'],
})
export class IntrestsPage implements OnInit {

  constructor(private intrestsService:IntrestsService,private route:Router) {}
entry:any;
entry1:any;
entry2:any;
entry3:any;
entry4:any;
entry5:any;
  ngOnInit() {}
  interpress()
  {
   
   this.entry= !this.entry;
 
  }
  interpress1()
  {

   this.entry1= !this.entry1;

  }
  interpress2()
  {

   this.entry2= !this.entry2;

  }
  interpress3()
  {
   

   this.entry3= !this.entry3;

  }
  interpress4()
  {
   

   this.entry4= !this.entry4;

  }
  interpress5()
  {
   
 
   this.entry5= !this.entry5;

  }
  createTableCategorie(){
   let TableCategorie=new Array();
   this.entry ? TableCategorie.push("categorie1"):null
   this.entry1? TableCategorie.push("categorie2"):null
   this.entry2? TableCategorie.push("categorie3"):null 
   this.entry3? TableCategorie.push("categorie4"):null 
   this.entry4? TableCategorie.push("categorie5"):null 
   this.entry5? TableCategorie.push("categorie6"):null
   console.log(TableCategorie);
   return TableCategorie;
  }

  updateRecomended()
  {this.intrestsService.updateRecomemnd(this.createTableCategorie()).subscribe(res=>
    {
      console.log(res);
      this.route.navigate(['/tabs']);
    },
    err=>
    {
      console.log(err);
    })}
}
