import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { crudapi } from './crudapi';



@Component({
  selector: 'app-cal',
  templateUrl: './cal.page.html',
  styleUrls: ['./cal.page.scss'],
})
export class CalPage implements OnInit {
  q1: string
  q2: string
  q31: string
  q32: string
  q4: string
  q5: string
  q6: string
  q7: string
  q8: string

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private getcrud: crudapi){}

  result:Number;
  addResult(q1:string,q2:string,q31:string,q32:string,q4:string,q5:string,q6:string,q7:string,q8:string){
    this.result = parseInt(this.q1)+parseInt(this.q2)+parseInt(this.q31)+parseInt(this.q32)+parseInt(this.q4)+parseInt(this.q5)+parseInt(this.q6)+parseInt(this.q7)+parseInt(this.q8);

    if(this.result >= 17){
      alert('คะแนนที่ได้ : ' + this.result  )
      alert('มีแนวโน้มฆ่าตัวตายในปัจจุบัน ระดับรุนแรง')
      alert(' ท่านจำเป็นต้องกรอกข้อมูลเพื่อเค้าพบเเพทย์เพื่อประเมินความเสี่ยงเพิ่มเติม '+this.presentPromptADD())

    }
    else if(this.result >= 9){
      alert('คะแนนที่ได้ : ' + this.result  )
      alert('มีแนวโน้มฆ่าตัวตายในปัจจุบัน ระดับปานกลาง')
      alert(' ท่านสามารถดูคำแนะนำเพิ่มเติมได้ที่นี้ ' + + this.router.navigate(['/know']))
    }
    else if(this.result >= 1){
      alert('คะแนนที่ได้ : ' + this.result  )
      alert('มีแนวโน้มฆ่าตัวตายในปัจจุบัน ระดับน้อย')
      alert(' ท่านสามารถดูคำแนะนำเพิ่มเติมได้ที่นี้ ' + this.router.navigate(['/know']))
    }
    else if(this.result >= 0){
      alert('คะแนนที่ได้ : ' + this.result  )
      alert('ไม่มีแนวโน้มฆ่าตัวตายในปัจจุบัน')
      alert ('กลับสู่หน้าหลัก' + this.router.navigate(['/home']))
    }
  }


  ngOnInit() {
  }

  navigate(){
    this.router.navigate(['/from8q'])
  }

  home(){
    this.router.navigate(['/home'])
  }

  async presentPromptADD() {
    let alert = this.alertCtrl.create({
      //title: 'Login',
      inputs: [
        {
          name: 'name',
          placeholder: 'ชื่อ: '

        },
        {
          name: 'point',
          placeholder: 'คะแนนของท่าน: '

        },
        {
          name: 'mail',
          placeholder: 'mail: '
        },
        {
          type: 'date',
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

}
