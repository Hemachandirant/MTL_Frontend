import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
// name : string = "hari"
//    click():void{
//     alert("hello")
//   }

//  printHello(): void {
//   alert("hi")
// }
  constructor(private router : Router){}
  after_submit(): void{
    this.router.navigate(['/profile'])
  }
}
