import { Component, OnInit } from '@angular/core';
import { Cases } from 'src/app/Case';
import { CasesService } from 'src/app/services/cases.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // cases : Cases[] = [
  //   { "caseno": 15783, "lawyer": "John Doe", "casetype": "Civil law", "judge": "Fathima Beevi", "status": "closed"},
  //   { "caseno": 27586, "lawyer": "Jane Smith", "casetype": "Criminal law", "judge": "Anna Chandy", "status": "closed"},
  //   { "caseno": 34754, "lawyer": "Michael Johnson", "casetype": "Family law", "judge": "Ranjan Gogoi", "status": "closed"},
  //   { "caseno": 40937, "lawyer": "Emily Brown", "casetype": "Employment law", "judge": "Chief Justice Dhananjaya Y. Chandrachud", "status": "next hearing"},
  //   { "caseno": 50976, "lawyer": "David Lee", "casetype": "Family law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "closed"},
  //   { "caseno": 61254, "lawyer": "Sarah Wilson", "casetype": "Civil law", "judge": "Kashinath Trimbak Telang", "status": "dismissal of suit"},
  //   { "caseno": 78979, "lawyer": "James Taylor", "casetype": "Criminal law", "judge": "Justice Surya Kant", "status": "dismissal of suit"},
  //   { "caseno": 88657, "lawyer": "Emma Martinez", "casetype": "Employment law", "judge": "Kashinath Trimbak Telang", "status": "closed"},
  //   { "caseno": 94536, "lawyer": "Daniel Harris", "casetype": "Employment law", "judge": "Justice Bhushan Ramkrishna Gavai", "status": "dismissal of suit"},
  //   { "caseno": 10456, "lawyer": "Olivia Garcia", "casetype": "Family law", "judge": "Justice Surya Kant", "status": "case dismissed"}
  // ]
  cases :any;
  filteredData: any[] = [];
  filterCriteria: any = {};

  constructor(private caseService : CasesService){}
  ngOnInit(){
    this.cases =this.caseService.getCases()
  }

  applyFilter() {
    this.filteredData = this.cases.filter((item: { caseType: any; lawyer: any; judge: any; caseNo: any; }) => {
      return (
        (!this.filterCriteria.caseType || item.caseType === this.filterCriteria.caseType) &&
        (!this.filterCriteria.lawyer || item.lawyer === this.filterCriteria.lawyer) &&
        (!this.filterCriteria.judge || item.judge === this.filterCriteria.judge) &&
        (!this.filterCriteria.caseNo || item.caseNo === this.filterCriteria.caseNo)
      );
    });
  }




}
