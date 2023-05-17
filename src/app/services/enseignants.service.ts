import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enseignant } from '../model/enseignant.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
 
  apiURL: string = 'http://localhost:8888/gard/api/enseignant';
  constructor(private http : HttpClient) {
}
listeEnseignant(): Observable<enseignant[]>{
  console.log("Getting enseignants...");
  return this.http.get<enseignant[]>(this.apiURL);
}

ajouterEnseignants(m: enseignant): Observable<enseignant> {
  return this.http.post<enseignant>(this.apiURL, m, httpOptions);
}
consulterEnseignant(id: number): Observable<enseignant> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<enseignant>(url);
}

updateEnseignant(m: enseignant): Observable<enseignant> {
  return this.http.put<enseignant>(this.apiURL, m, httpOptions);
}
supprimerEnseignant(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }
  countEnseignant(): Observable<number> {
    return this.http.get<number>(this.apiURL);
  }











} 
