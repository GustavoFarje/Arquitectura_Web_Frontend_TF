import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profesores } from '../models/profesores';
import {Observable, Subject} from 'rxjs'
import {HttpClient} from '@angular/common/http'
const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private url=`${base_url}/profesores`;
  private listaCambio=new Subject<Profesores[]>();
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Profesores[]>(this.url);
  }

  insert(prof:Profesores){
    return this.http.post(this.url,prof);
  }

  setList(listaNueva:Profesores[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    return this.http.get<Profesores>(`${this.url}/${id}`);
  }
  update(p: Profesores){
    return this.http.put(this.url, p);
  }
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
