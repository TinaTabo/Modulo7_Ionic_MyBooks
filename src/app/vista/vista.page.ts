import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage{

  public books: Book[] = [];
  constructor(private booksService: BooksService) {
  }

  showBooks(id:any){
    if (id != '') {
      this.booksService.getOne(1, Number(id)).subscribe((data:any)=>{
        this.books = data.data;
      })
    }else{
      this.booksService.getAll(1).subscribe((data:any)=>{
        this.books = data.data;
        console.log(data);
      })
    }
  }
}
