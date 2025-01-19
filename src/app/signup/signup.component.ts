import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule],
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  cv: File | null = null; // New property to store CV file

  constructor(private router: Router) {}

  // Method to handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.cv = file;
      console.log('Selected file:', file);
    }
  }

  // Method to handle form submission
  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.cv) {
      alert('Please upload your CV!');
      return;
    }

    // Logic to handle successful registration
    alert(`Welcome, ${this.name}! Your account has been created. Your CV has been uploaded.`);
    
    // Navigate to the jobs page after successful signup
    this.router.navigate(['/jobs']);
  }

  // Method to redirect to the login page
  goToLogin() {
    this.router.navigate(['/']); // Navigate to login page
  }
}
