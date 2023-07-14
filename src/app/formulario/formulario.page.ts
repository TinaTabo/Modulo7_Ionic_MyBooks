import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage{

  public books: Book[] = [];
  public msg:string = "";
  constructor(private booksService: BooksService) {
  }

  addBook(title:any,type:any,author:any,price:any,photo:any){
    let newBook = new Book(undefined,1,title,type,author,price,photo);
    this.booksService.add(newBook).subscribe((data:any)=>{
      if(data.code == 200){
        this.msg = "Libro añadido correctamente";
      }else{
        this.msg = "Error al añadir"
      }
    })
  }

  modifyBook(title:any = undefined,type:any = undefined,author:any = undefined,price:any = undefined,photo:any = undefined, id:any = undefined){
    let newBook = new Book(id,1,title,type,author,price,photo);
    this.booksService.edit(newBook).subscribe((data:any)=>{
      if(data.code == 200){
        this.msg = "Libro modificado correctamente";
      }else{
        this.msg = "Error al modificar"
      }
    })
  }

  deleteBook(id:any = undefined){
    this.booksService.delete(id).subscribe((data:any)=>{
      if(data.code == 200){
        this.msg = "Libro eliminado correctamente";
      }else{
        this.msg = "Error al eliminar"
      }
    })
  }
}
