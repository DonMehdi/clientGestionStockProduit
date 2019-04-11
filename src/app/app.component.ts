import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientGestionStockProduit';
  showHide = true;


  onShowSideBar(){
this.showHide = !this.showHide;
  }
}
