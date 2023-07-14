import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "https://api-books-theta.vercel.app/books";
  constructor(private http: HttpClient){}

  // Métodos del servicio
  //-- Método para obtener todos los libros.
  getAll(id_user:number):Observable<Object>{
    return this.http.get(this.url);
  }

  //-- Método para obtener un solo libro --> buscador.
  getOne(id_user:number,id_book:number):Observable<Object>{
    return this.http.get(this.url + '?id_user=' + id_user + '&id_book=' + id_book);
  }

  //-- Método para añadir un libro --> Funcionalidad de la pg Add Book.
  add(book:Book):Observable<Object>{
    return this.http.post(this.url,book);
  }

  //-- Método para editar un libro --> Funcionalidad de la pg Update Book.
  edit(book:Book):Observable<Object>{
    return this.http.put(this.url,book);
  }

  //-- Método para borrar un libro --> Funcionalidad del botón 'X' de las cards de cada libro.
  delete(id_book:number):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_book:id_book}});
  }
}