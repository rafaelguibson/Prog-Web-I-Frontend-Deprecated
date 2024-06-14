import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ReceitaHttpclienteService} from "../../service/receita-httpcliente.service";
import {AuthenticationHttpclientServiceService} from "../../service/authentication-httpclient-service.service";

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private authenticationHttpService: AuthenticationHttpclientServiceService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
      this.authenticationHttpService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        {
          next: (result) => {
            console.log(result)
          },
          error: (err) => {
            // this.showErrorMensage(err.error);
          }
        }
      )
  }
}
