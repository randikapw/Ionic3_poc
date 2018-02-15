import { Component } from '@angular/core';
import { NavController, ModalController,ToastController } from 'ionic-angular';

import { MyModalComponent } from '../../components/my-modal/my-modal'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {

  }

  onBtnClick(){
    let modal = this.modalCtrl.create(MyModalComponent, 0);
    modal.present();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.presentToast();
    }, 2000);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
