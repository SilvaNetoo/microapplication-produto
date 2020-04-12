import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  constructor(private httpClient: HttpClient) { }

  get(): Observable<Array<Produto>> {
    return this.httpClient.get<Array<Produto>>(`${'http://desktop-nrm99hp:8000'}/${'produtos'}`);
  }

  delet(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${'http://desktop-nrm99hp:8000'}/${'produtos'}/${JSON.stringify(id)}`);
  }

  getById(id: string) {
    return this.httpClient.get<Produto>(`${'http://desktop-nrm99hp:8000'}/${'produtos'}/${id}`);
  }

  post(object: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(`${'http://desktop-nrm99hp:8000'}/${'produtos'}`, object);
  }

  putCarrinho(idUser: string, prod: Produto): Observable<any> {
    return this.httpClient.put<any>(`${'http://desktop-nrm99hp:8000'}/${'usuarios'}/${'produtos'}/${idUser}`, prod);
  }

  put(object: Produto, id: string): Observable<Produto> {
    return this.httpClient.put<Produto>(`${'http://desktop-nrm99hp:8000'}/${'produtos'}/${id}`, object);
  }

}
