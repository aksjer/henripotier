import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() checked = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  check(){
    this.checked.next(this.book);
  }



}
