import { Component } from '@angular/core';

@Component({
  selector: 'app-create-quotaion',
  templateUrl: './create-quotaion.component.html',
  styleUrl: './create-quotaion.component.css',
})
export class CreateQuotaionComponent {
  currentStep: number = 1;
  items = [
    {
      qty: 0,
      description: '',
      unitPrice: 0,
      price: 0,
    },
  ];
  client = {
    name: '',
    email: '',
    clientNumber: '',
    type: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
  };
  displayedColumns: string[] = ['qty', 'description', 'unitPrice', 'price', 'actions'];


  // Go to the next step
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  // Go to the previous step
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  addItem() {
    this.items.push({ qty: 0, description: '', unitPrice: 0, price: 0 });
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  updatePrice() {
    this.items.forEach(item => {
      item.price = item.qty * item.unitPrice;
    });
  }

  submitQuotation() {
    const payload = {
      client: this.client,
      items: this.items
    };
    console.log('Submitting Quotation:', payload);
    // You can add HTTP requests to submit the data to the backend
  }
}
