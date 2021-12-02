import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.sass'],
})
export class MainHomeComponent implements OnInit {
  constructor() {}
  nombre = localStorage.getItem('nombre')?.replace(/["']/g, '');

  ngOnInit(): void {}
}
