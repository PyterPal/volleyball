import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  loginInProgress = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.loginInProgress = true;
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          this.router.navigateByUrl('/');
        })
        .catch((e) => {
          alert('Sikertelen bejelentkezés ' + e);
        })
        .finally(() => {
          this.loginInProgress = false;
        });
    }
  }
}
