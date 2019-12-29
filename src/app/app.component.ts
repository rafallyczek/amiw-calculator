import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public inputText: string = "";
  public inputNumber: number = 0;
  public result: number = 0;
  public resultString: string = "0";
  public int: number;

  public onKeyPress(event) {
    if(event.key!="0" && event.key!="1"){
      event.preventDefault();
    }else{
      this.inputText = event.target.value;
      this.inputNumber = parseInt(this.inputText,2);
    }     
  }

  public onClick(digit: string) {
    this.inputText += digit;
    this.inputNumber = parseInt(this.inputText,2);
  }

  public reset(){
    this.inputText = "";
  }

  public saveNumber(int: number){
    this.result = this.inputNumber;
    this.reset();
    this.int = int;
  }

  public calculateResult(){
    if(this.int==0){
      this.result += this.inputNumber;
    }else{
      this.result -= this.inputNumber;
    }
    this.resultString = this.result.toString(2);
    this.reset();
  }

}
