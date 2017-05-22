import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/observable';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  cost: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.get().subscribe(books => this.books = books);
  }

  offer() {
    const books = this.books.filter(e => e.selected);
    const total = books.reduce((a, b) => a + b.price, 0);
    let isbns = books.reduce((a, b) => a + `${b.isbn},`, '');
    isbns = isbns.slice(0, isbns.length - 1);
    this.bookService.offer(isbns).subscribe(res => {
      if (res.offers.length > 1) {
        const result = [];
        result.push(total * ((100 - res.offers[0].value) / 100));
        result.push(total - res.offers[1].value);
        result.push(total - res.offers[2].value * Math.floor(total / res.offers[2].sliceValue));
        this.cost = Math.min.apply(Math, result);
      } else {
        this.cost = total * ((100 - res.offers[0].value) / 100);
      }
    },
      err => {
        console.error(err);
      });
  }

}
