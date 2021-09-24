import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private minLengthValue: number = 2;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(this.minLengthValue)]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.minLengthValue)]),

  });

  submit(): void {
    if (this.form.valid) {
      this.authService.setLocalStorage(this.form.value.username, this.form.value.password);
      this.router.navigate(['']);
    }
  }

}
