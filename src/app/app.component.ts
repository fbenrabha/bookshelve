import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';
  constructor() {
    var firebaseConfig = {
     
      apiKey: "AIzaSyDW6y8_JEf1A58RDic_6T6AbFlryGhMWvk",
      authDomain: "bookshelves-e7b7b.firebaseapp.com",
      projectId: "bookshelves-e7b7b",
      databaseURL: "https://bookshelves-e7b7b-default-rtdb.firebaseio.com",
      storageBucket: "bookshelves-e7b7b.appspot.com",
      messagingSenderId: "1009016474761",
      appId: "1:1009016474761:web:27ce368cf41fa7b9668a58",
      measurementId: "G-10LGSRH89Y"
  
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
  }
}
