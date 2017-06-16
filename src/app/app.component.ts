import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola! Estamos en Taller Angula JS uhu !';
  userSelected: any;

  onSelected(user: any) {
    this.userSelected = user;
  }

}
