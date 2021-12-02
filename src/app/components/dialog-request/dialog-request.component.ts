import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-request',
  templateUrl: './dialog-request.component.html',
  styleUrls: ['./dialog-request.component.sass'],
})
export class DialogRequestComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogRequestComponent>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
