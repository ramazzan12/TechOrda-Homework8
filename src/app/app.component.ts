import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techorda-homework8';
  url1 = './posts/card.component.html';
  url2 = './comments/comments.component.html';

  openPost() {
    window.open(this.url1);
  }
  openComment() {
    window.open(this.url2);
  }
}