import { Component } from '@angular/core';
import { CasesService } from 'src/app/services/cases.service';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  isUploading = false;
  uploadProgress = 0;
  selectedFilePath : string = 'D:\\LegalDocuments\\'
  summary !: string

  constructor(private summaryService : SummaryService, private caseService : CasesService){}

  onFileSelected(event : any) {
    const file: File = event.target.files[0];

    if (file) {
      this.isUploading = true;
      this.uploadProgress = 20;  // Update as per your requirement

      // Simulate a file upload
      setTimeout(() => {
        this.isUploading = false;
        this.uploadProgress = 0;
        this.selectedFilePath += file.name;  // Store file path
        console.log(this.selectedFilePath);
      }, 1000);
    }

    this.getSummaryStatic(this.selectedFilePath)
  }

  getSummary(path : any){
    this.summaryService.getSummaryByPath(path).subscribe({
      next: (response: any) => {
        this.summary = response
      },
      error: (error: any) => {
        console.log();
      },
    }
    );
  }

  getSummaryStatic(path : any){
    this.summary = this.caseService.getSummaryStatic()
  }

}
