import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enfant } from '../model/enfant.model';
import { Image } from "../model/image.model";
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  apiURL: string = 'http://localhost:8888/gard/api/enfant';
    constructor(private http : HttpClient) {
}
listeEnfant(): Observable<enfant[]>{
  return this.http.get<enfant[]>(this.apiURL);
  }
  ajouterEnfant( clas: enfant):Observable<enfant>{
    return this.http.post<enfant>(this.apiURL, clas, httpOptions);
    }
    supprimerEnfant(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterEnfant(id: number): Observable<enfant> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<enfant>(url);
        }
        updateEnfant(prod :enfant) : Observable<enfant>
        {
        return this.http.put<enfant>(this.apiURL, prod, httpOptions);
        }
        countEnfant(): Observable<number> {
          return this.http.get<number>(this.apiURL);
        }
        getEnfantById(id:number): Observable<enfant> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<enfant>(url);
        }
          }
