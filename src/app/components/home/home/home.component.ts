import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;

  constructor(private route:Router){}

  // Function to toggle the menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    
  }

  // Logout logic
  logout() {
    // Your logout functionality goes here
    this.route.navigate(['/login']);
    console.log('Logged out');
  }
}
