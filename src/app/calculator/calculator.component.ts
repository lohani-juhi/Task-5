import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  toshow = '0'
  currvalue = ''
  isReset = false

  writetoinput(value: string) { 
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
  }

  equals() {
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
    this.isReset = true;
  }

  clear() {
    this.isReset = false;
    this.currvalue = '';
    this.toshow = '0';
  }
  addDigit(value:string){
    if (this.isReset) {
      this.clear();
    }
    this.writetoinput(value);
  }
  addOperator(value:string){
    this.writetoinput(value);
    this.isReset=false;
  }

  back() {
    this.currvalue = this.currvalue.slice(0, -1);
    this.toshow = this.currvalue;
    if (this.toshow == '') {
      this.toshow = '0';
    }
  }
}


