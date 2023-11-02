import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { CarreraProfesional } from '../models/carreraprofesional';
const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class CarreraprofesionalService {
  private url=`${base_url}/CarrerasProfesionales`;
  private listaCambio=new Subject<CarreraProfesional[]>();
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<CarreraProfesional[]>(this.url);
  }

  insert(carr:CarreraProfesional){
    return this.http.post(this.url,carr);
  }

  setList(listaNueva:CarreraProfesional[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    return this.http.get<CarreraProfesional>(`${this.url}/${id}`);
  }
  update(c: CarreraProfesional){
    return this.http.put(this.url, c);
  }
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
