import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';
import { AlertifyService } from 'src/shared/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.createUserLoginForm();
  }

  createUserLoginForm() {
    return this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, [Validators.required]],
    });
  }

  SaveLoginForm() {
    const token = this.authService.authUser(this.loginForm.value);
    if (token) {
      localStorage.setItem('token', token.name);
      this.alertifyService.success('Login Successful');
    } else {
      this.alertifyService.error('Login Unseccessful...');
    }
    this.loginForm.reset();
    this.router.navigate(['/']);
  }

  cancelForm() {
    this.loginForm.reset();
  }
}
