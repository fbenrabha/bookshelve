import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/Book.model';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveBook() {
   
    let title='ls';
    title = this.bookForm.get('title')?.value;
    const author = this.bookForm.get('author')?.value;
    const synopsis = this.bookForm.get('synopsis')?.value;

    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/books']);
    
  }
}

