import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitting = false;
  serverError = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isSubmitting() {
    return this.submitting;
  }

  isSubmitDisabled() {
    return this.submitting || this.loginForm.invalid;
  }

  serverErrorMessage() {
    return this.serverError;
  }

  // ✅ Cuando el usuario inicia sesión correctamente, redirige a /noticias
  onSubmit() {
    if (this.loginForm.valid) {
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        this.router.navigate(['/noticias']); // 👈 Aquí se cambia a /noticias
      }, 1000);
    }
  }

  // ✅ Ir al registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
