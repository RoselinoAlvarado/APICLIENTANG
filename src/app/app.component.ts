import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './cliente/listar/listar.component';
import { NovoComponent } from './cliente/novo/novo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Novo(){
    this.router.navigate(["novo"]);
  }
}
