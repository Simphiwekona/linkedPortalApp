import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private route:Router){}

  // Function to toggle the menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Logout logic
  logout() {
    // Your logout functionality goes here
    this.route.navigate(['/login']);
    console.log('Logged out');
  }

}
