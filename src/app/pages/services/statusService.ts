import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/model/status.model';

@Injectable({
  providedIn: 'root',
})
export class statusService {
  constructor(private http: HttpClient) {}

  status(id: number): Observable<Estado> {
    //parseInt(id);
    return this.http.get<Estado>('/api/Equipment?clientId=' + id);
  }
}
