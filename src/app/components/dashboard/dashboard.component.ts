import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { Client } from '../../model/client.model';
import { Quote } from '../../model/quote.model';
import { QuotationsService } from '../../service/quotations.service';
import { ViewQuotaionComponent } from '../quotations/view-quotaion/view-quotaion.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Sales data
  salesData = [{ data: [150, 200, 250, 300, 350], label: 'Sales' }];
  salesLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // Traffic data
  trafficData = [
    { data: [75, 60, 90, 100, 40, 70, 95, 120], label: 'Traffic' },
  ];
  trafficLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  // Users Data for Table
  usersData = [
    {
      name: 'Yiorgos Avraamu',
      country: 'USA',
      usage: '50%',
      lastLogin: '10 seconds ago',
    },
    {
      name: 'Avram Tarasios',
      country: 'Brazil',
      usage: '50%',
      lastLogin: '5 minutes ago',
    },
  ];

  displayedColumns: string[] = ['clientName', 'customerNumber', 'clientEmail', 'clientNumber', 'action'];

  users: Client[] = [];
  quotations: Quote[] = [];

  constructor(
    private userService: UsersService,
    private dialog: MatDialog,
    private quotationService: QuotationsService
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadQuotations();
  }

  loadClients() {
    this.userService.getClients().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching clients', error);
      },
    });
  }

  loadQuotations() {
    this.quotationService.getAllQuotes().subscribe({
      next: (data) => {
        this.quotations = data;
      },
      error: (error) => {
        console.error('Error fetching quotations', error);
      },
    });
  }
  openDialog(): void {
    this.dialog.open(AddUserComponent, {
      width: '700px',
      height: '500px',
    });
  }
  openViewQuotationDialog(id:string){
    this.dialog.open(ViewQuotaionComponent, {
      width: "700px",
      height: "500px",
      data: {id}
    })
  }
  editDialog() {}
}
