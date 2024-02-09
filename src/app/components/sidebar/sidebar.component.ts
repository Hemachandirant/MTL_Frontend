import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor (private router : Router){}

  profclicked !: any
  dashClicked !: any
  sumClicked !: any

  profileClicked(){
      this.profclicked = "profileClicked"
      this.dashClicked= ""
      this.sumClicked = ""
      this.router.navigate(['/profile']);
  }

  dashboardClicked(){
    this.dashClicked = "dashboardClicked"
    this.profclicked = ""
    this.sumClicked = ""
    this.router.navigate(['/dashboard'])
  }

  summaryClicked(){
    this.sumClicked = "summaryClicked"
    this.profclicked = ""
    this.dashClicked = ""
    this.router.navigate(['/summary'])
  }

}
