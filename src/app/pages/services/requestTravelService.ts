import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from 'src/app/model/equipo.model';

@Injectable({
  providedIn: 'root',
})
export class requestService {
  constructor(private http: HttpClient) {}

  solicitar(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(
      'api/Retirement?clientId=' +
        equipo.id +
        '&mark=' +
        equipo.marca +
        '&model=' +
        equipo.modelo +
        '&failure=' +
        equipo.falla,
      equipo
    );
  }
}
