import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  num1='';
  num2='';
  resultado:number=0;

  sumar():void{
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
  
  
 
  

  constructor() { }

  ngOnInit(): void {
  }

}
