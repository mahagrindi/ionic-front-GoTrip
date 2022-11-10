import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.scss'],
})
export class CodeModalComponent implements OnInit {
  constructor(private router: Router) {}

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

  ngOnInit() {}

  //afficher la valeur des input du code dans le console
  //vérifier le code et aller à la page new password
  valueChange(ev) {
    console.log(ev.length);
    if (ev.length == 4) {
      this.router.navigate(['/change-password']);
    }
  }
}
