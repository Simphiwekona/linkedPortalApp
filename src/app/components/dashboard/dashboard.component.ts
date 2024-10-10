import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Sales data
  salesData = [{ data: [150, 200, 250, 300, 350], label: 'Sales' }];
  salesLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // Traffic data
  trafficData = [{ data: [75, 60, 90, 100, 40, 70, 95, 120], label: 'Traffic' }];
  trafficLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  // Users Data for Table
  usersData = [
    { name: 'Yiorgos Avraamu', country: 'USA', usage: '50%', lastLogin: '10 seconds ago' },
    { name: 'Avram Tarasios', country: 'Brazil', usage: '50%', lastLogin: '5 minutes ago' }
  ];

  displayedColumns: string[] = ['user', 'country', 'usage', 'lastLogin'];

  users: any[] = [];

  constructor(private userService: UsersService, 
    private dialog:MatDialog
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });   
  }

  openDialog(): void {
    this.dialog.open(AddUserComponent, {
      width: '700px',
      height: '500px'
    });
  }
}
