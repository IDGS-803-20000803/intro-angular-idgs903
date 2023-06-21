import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1!:number;
  num2!:number;
  resultado!:number;
  operaSelect:string='suma'

  tipoOperacion=[
    'sumar',
    'resta',
    'multiplicacion',
    'division'
  ];
  
  calcular(){
    switch(this.operaSelect){
      case 'sumar': this.resultado = this.num1 + this.num2
      break;
      case 'resta': this.resultado = this.num1 - this.num2
      break;
      case 'multiplicacion': this.resultado = this.num1 * this.num2
      break;
      case 'division': this.resultado = this.num1 / this.num2
      break;
    }
  }

  ngOnInit(): void {
  }

}
