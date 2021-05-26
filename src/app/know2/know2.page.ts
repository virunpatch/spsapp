import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-know2',
  templateUrl: './know2.page.html',
  styleUrls: ['./know2.page.scss'],
})
export class Know2Page implements OnInit {

  cname;
  img;
  detail;
  constructor(private KnowController: ModalController) { }

  ngOnInit() {
  }
  async closeModal(){
    await this.KnowController.dismiss();
  }


}
