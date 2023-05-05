import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  registerInProgress = false;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
    } else {
      if (
        this.registerForm.value.password !== this.registerForm.value.rePassword
      ) {
        alert('Nem egyezik a két jelszó!');
        return;
      }
      this.registerInProgress = true;
      this.authService
        .register(
          this.registerForm.value.email,
          this.registerForm.value.password
        )
        .then(() => {
          this.router.navigateByUrl('/');
        })
        .catch((e) => {
          alert('Sikertelen regisztráció ' + e);
        })
        .finally(() => {
          this.registerInProgress = false;
        });
    }
  }
}
