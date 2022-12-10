import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

  @Input() message ;
  constructor(
    private modalController : ModalController,
    private route: Router,
  ) { }

  ngOnInit() {}

  closeModel(){
    //this.route.navigate(['/tabs/home']);
    this.modalController.dismiss();

  }
}
