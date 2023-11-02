import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import {Observable, Subject} from 'rxjs'
import { Curso } from '../models/curso';
const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url=`${base_url}/curso`;
  private listaCambio=new Subject<Curso[]>();
  constructor(private http:HttpClient) { }
  
  list(){
    return this.http.get<Curso[]>(this.url);
  }

  insert(prof:Curso){
    return this.http.post(this.url,prof);
  }

  setList(listaNueva:Curso[]){
    this.listaCambio.next(listaNueva);
  }

  getList(){
    return this.listaCambio.asObservable();
  }
  listId(id: number){
    return this.http.get<Curso>(`${this.url}/${id}`);
  }
  update(p: Curso){
    return this.http.put(this.url, p);
  }
  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
