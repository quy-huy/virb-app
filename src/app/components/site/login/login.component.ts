import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppApiService } from '../../../service/app-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AppApiService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    const data = {
      email: this.email.value,
      password: this.password.value,
    };
    
    this.authService.login(data).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/']);
        // if (this.authService.isLoggedIn) {
        //   const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        //   this.router.navigate([redirect]);
        //   return;
        // }
       
      },
      error => this.error = error
    );
  }
}