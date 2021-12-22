import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { userLog } from 'src/app/model/userLog.model';
import { loginService } from 'src/app/pages/services/loginService';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.sass'],
})
export class LoginHomeComponent implements OnInit {
  constructor(
    private loginService: loginService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  hide = true;

  ngOnInit(): void {}

  user: userLog = {
    email: '',
    password: '',
  };

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit(formDirective: FormGroupDirective): void {
    this.user = this.loginForm.value;
    this.loginService.login(this.user.email, this.user.password).subscribe(
      (resp) => {
        //SETTERS
        localStorage.setItem('userLoged', JSON.stringify(this.user.email));
        localStorage.setItem('id', JSON.stringify(resp.id));
        localStorage.setItem('nombre', JSON.stringify(resp.fullName));
        localStorage.setItem('direccion', JSON.stringify(resp.address));

        //GETTERS
        localStorage.getItem('id');
        localStorage.getItem('userLoged');

        this.isHomeRoute();
      },
      (error) => {
        this.openDialog();
      }
    );
    formDirective.resetForm();
    this.loginForm.reset();
  }

  isHomeRoute() {
    return this.router.navigate(['home']);
  }

  //Diálogo para datos erróneos
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '350px',
    });
  }
}
