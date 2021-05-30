import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { crudapi } from './crudapi';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  tmpcountrylist: any;

  countrylist = [
    {countryname: 'Childe',
      countrypic: 'https://img.game8.co/3295009/47a42db3c2736ef309028ccbd3cfb5cf.png/show',
      capital: 'Bangkok'} ,
    {countryname: 'Zhongli',
      countrypic: 'https://img.icons8.com/color/48/000000/s.png',
      capital: 'Singapore'} ,
      {countryname: 'Bennte',
      countrypic: 'https://img.icons8.com/color/48/000000/m.png',
      capital: 'Nepidor'} ,
    ];
  constructor(private alertCtrl: AlertController,
    private getcrud: crudapi) { }


  ngOnInit() {

      this.getcrud.readData().subscribe(data => {
      this.tmpcountrylist = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        name: e.payload.doc.data()['name'.toString()],
        //myflag: e.payload.doc.data()['flag'.toString()],
        point: e.payload.doc.data()['point'.toString()],
        mail: e.payload.doc.data()['mail'.toString()]
    };
   });
    console.log(this.tmpcountrylist);
  });

}

  async presentConfirm(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.getcrud.delData(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }


  deleteCountryItem(tmpitem: any){
      for (let i=0; i< this.countrylist.length; i++){
          if (this.countrylist[i] == tmpitem) //found
              this.countrylist.splice(i,1);
      }//for
  }//method

  // === EDIT ==========================================

  async presentPrompt(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      //title: 'Login',
      inputs: [
        {
          name: 'name',
          placeholder: 'name',
          value: tmpitem.name
        },
        {
          name: 'point',
          placeholder: 'point',
          value: tmpitem.point
        },
        {
          name: 'mail',
          placeholder: 'mail',
          value: tmpitem.mail
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.name == '' || data.point == '' || data.mail == '' )
                 //show toast
                 return false;
            else { //update here
                tmpcountry['name'] = data.name;
                tmpcountry['point'] = data.point;
                //tmpcountry['flag'] = data.inflag;
                tmpcountry['mail'] = data.mail;
                this.getcrud.updateData(tmpitem.id, tmpcountry);

            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

  // === ADD ===========================================

  async presentPromptADD() {
    let alert = this.alertCtrl.create({
      //title: 'Login',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'

        },
        {
          name: 'point',
          placeholder: 'point'
        },
        {
          name: 'mail',
          placeholder: 'mail'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ADD',
          handler: data => {
            let tmpobj =  //db : inputform
              {name: data.name,
               point: data.point,
               //flag: data.inflag,
               mail: data.mail
              };
              this.getcrud.createData(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

}// class
