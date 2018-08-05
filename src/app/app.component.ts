import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    // initialize firebase for authentication
    firebase.initializeApp({
      apiKey: 'AIzaSyBISrX8pMLr94kWmLHIYLL9TbOF4yklyys',
      authDomain: 'ng-recipe-book-5425a.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
