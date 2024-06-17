import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ReceitaHttpclienteService} from "../../service/receita-httpcliente.service";
import {AuthenticationHttpclientServiceService} from "../../service/authentication-httpclient-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  messagem: string = 'Teste de mensagem de erro!';
  showMessage: boolean = false;
  private durationInSeconds: number = 5;
  constructor(
    private router: Router,
    private authenticationHttpService: AuthenticationHttpclientServiceService,
    private _snackBar: MatSnackBar){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
      this.authenticationHttpService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/receitas'])
          this.openSnackBar('Login successful!');
        }, error: (err) => {
          this.showAlert(err.error);
          console.log(err.error)
        }
      });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close',  {
      duration: this.durationInSeconds * 1000,
      panelClass: ['custom-snack-bar']
    });
  }

  showAlert(message: string) {
    this.messagem = message;
    this.showMessage = true;

    // Esconde a mensagem após 5 segundos
    setTimeout(() => {
      this.showMessage = false;
    }, 5000); // 5000 milissegundos = 5 segundos
  }
}
