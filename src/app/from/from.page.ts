import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.page.html',
  styleUrls: ['./from.page.scss'],
})
export class FromPage implements OnInit {

  TP:any=[{title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},
          {title:'อาการเบื่อ'},]
  public form = [
    { val: 0,tp: '0 ไม่มีอาการ' ,isChecked: false },
    { val: 1,tp: '1 เล็กน้อย' ,isChecked: false },
    { val: 2,tp: '2 ปลานกลาง' ,isChecked: false },
    { val: 3,tp: '3 รุนแรง' ,isChecked: false }
  ];

  Q: any=[{tl2:'คำถามที่1: ท่านมีพฤติกรรมการกินที่มากเกินไปหรือว่าน้อยเกินไปหรือไม่'},
          {tl2:'คำถามที่2: '},
          {tl2:'คำถามที่3: '},
          {tl2:'คำถามที่4: '},
          {tl2:'คำถามที่5: '},
          {tl2:'คำถามที่6: '},
          {tl2:'คำถามที่7: '},
          {tl2:'คำถามที่8: '},
          {tl2:'คำถามที่9: '}]

  constructor() { }

  ngOnInit() {
  }

}
