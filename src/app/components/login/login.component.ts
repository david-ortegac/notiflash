import { Component, computed, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/loginService';
import { Login } from '../../models/Login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  readonly isSubmitting = signal(false);
  readonly serverErrorMessage = signal<string | null>(null);

  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  readonly isSubmitDisabled = computed(() => this.isSubmitting());

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const login: Login = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? '',
    };

    this.loginService.login(login).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.router.navigateByUrl('/nosotros');
      },
      error: (error) => {
        this.isSubmitting.set(false);
        const message = error?.error?.message ?? 'No fue posible iniciar sesión.';
        this.serverErrorMessage.set(message);
      }
    });
  }
}
