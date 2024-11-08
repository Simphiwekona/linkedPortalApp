import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuotationsService } from '../../../service/quotations.service';
import { Quote } from '../../../model/quote.model';

@Component({
  selector: 'app-view-quotaion',
  templateUrl: './view-quotaion.component.html',
  styleUrl: './view-quotaion.component.css',
})
export class ViewQuotaionComponent implements OnInit {
  quotations: Quote | null = null ;
  constructor(
    public dialogRef: MatDialogRef<ViewQuotaionComponent>,
    private quotationService: QuotationsService,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ) {}

  ngOnInit(): void {
    this.loadQuoteInfo(this.data.id)
  }

  loadQuoteInfo(quotationId: number) {
    this.quotationService.getQuoteById(quotationId).subscribe({
      next: (data) => {
        this.quotations = data;
      },
      error: (error) => {
        console.error("Failed to fetch quote with the ID.")
      }
    });
  }

  downloadPDF(){
    if(this.data.id) {
      this.quotationService.downloadQuotation(this.data.id).subscribe((pdfblob: Blob) => 
      {
        const blob = new Blob([pdfblob], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'quotation.pdf;'
        link.click();
      },
    (error) => {
      console.error('Error downloading PDF:', error);
    })
    }
  }
}
