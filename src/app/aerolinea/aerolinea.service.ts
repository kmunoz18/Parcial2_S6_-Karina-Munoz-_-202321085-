import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Aerolinea } from './aerolinea';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AerolineaService {
    private apiUrl: string = 'https://raw.githubusercontent.com/NoNameLab/ISIS2603_Parcial2_S6_202510/refs/heads/main/flights.json';

constructor(private http: HttpClient) { }

getAerolineas(): Observable<Aerolinea[]> { 
  return this.http.get<Aerolinea[]>(this.apiUrl);
}

}
