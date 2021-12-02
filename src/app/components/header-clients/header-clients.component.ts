import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-clients',
  templateUrl: './header-clients.component.html',
  styleUrls: ['./header-clients.component.sass'],
})
export class HeaderClientsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.openMenu');
    const menuClose = document.querySelector('.closeMenu');

    function toggleMenu() {
      menu?.classList.toggle('menuOpened');
    }

    menuOpen?.addEventListener('click', toggleMenu);
    menuClose?.addEventListener('click', toggleMenu);
  }

  ngDoCheck(): void {
    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.openMenu');
    const menuClose = document.querySelector('.closeMenu');

    function toggleMenu() {
      menu?.classList.toggle('menuOpened');
    }

    menuOpen?.addEventListener('click', toggleMenu);
    menuClose?.addEventListener('click', toggleMenu);
  }

  //loginNav
  isLoginRoute() {
    return this.router.url != '/login';
  }
  logOut(): void {
    localStorage.clear();
  }

  //si localStorage no tiene nada, volver a login
}
