import { Routes } from "@angular/router";
import { BooksComponent } from './books/books.component';
import { Book } from './models/book.model';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'books', children: [
      { path: '', component: BooksComponent },
      { path: ':isbn', component: BookDetailsComponent },
    ]
  },
];
