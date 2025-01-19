import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
  
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/jobs']);
    } else {
      alert('Invalid credentials!');
    }
  }
  sin()
  {
    this.router.navigate(['/sign']);
  }
}
