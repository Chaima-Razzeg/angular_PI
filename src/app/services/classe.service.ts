import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { classe } from '../model/classe.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  apiURL: string = 'http://localhost:8888/gard/api/classe';
    constructor(private http : HttpClient) {
}
listeClasse(): Observable<classe[]>{
  return this.http.get<classe[]>(this.apiURL);
  }
  ajouterClasse( clas: classe):Observable<classe>{
    return this.http.post<classe>(this.apiURL, clas, httpOptions);
    }
    supprimerClasse(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterClasse(id: number): Observable<classe> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<classe>(url);
        }
        updateClasse(prod :classe) : Observable<classe>
        {
        return this.http.put<classe>(this.apiURL, prod, httpOptions);
        }
        countClasse(): Observable<number> {
          return this.http.get<number>(this.apiURL);
        }
        getClasseById(id:number): Observable<classe> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<classe>(url);
        }
}
