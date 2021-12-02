import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Equipo } from 'src/app/model/equipo.model';
import { requestService } from 'src/app/pages/services/requestTravelService';
import { MatDialog } from '@angular/material/dialog';
import { DialogRequestComponent } from '../dialog-request/dialog-request.component';

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.sass'],
})
export class FormRequestComponent implements OnInit {
  constructor(
    private requestService: requestService,
    public dialog: MatDialog
  ) {}
  direccion = localStorage.getItem('direccion')?.replace(/["']/g, '');
  ngOnInit(): void {}
  //FORMULARIO
  equipo: Equipo = {
    marca: '',
    modelo: '',
    falla: '',
  };

  reqForm = new FormGroup({
    marca: new FormControl(''),
    modelo: new FormControl(''),
    falla: new FormControl(''),
  });

  submit(formDirective: FormGroupDirective): void {
    this.reqForm.value.id = localStorage.getItem('id');
    console.log(this.reqForm.value);
    this.requestService.solicitar(this.reqForm.value).subscribe((resp) => {
      this.openDialog();
    });
    formDirective.resetForm();
    this.reqForm.reset();
  }

  //Diálogo paraconfirmar
  openDialog() {
    this.dialog.open(DialogRequestComponent, {
      width: '350px',
    });
  }
}
