import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MyModalComponent } from '../../components/my-modal/my-modal'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  onBtnClick(){
    let modal = this.modalCtrl.create(MyModalComponent, 0);
    modal.present();
  }

}
