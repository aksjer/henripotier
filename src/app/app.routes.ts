import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { Book } from './models/book.model';
import { BookComponent } from './book/book.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  {
    path: 'books', children: [
      { path: '', component: BooksComponent }
    ]
  },
];
