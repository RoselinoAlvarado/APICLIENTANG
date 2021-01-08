import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Salvarr(cliente:Cliente){
    this.service.novoCliente(cliente)
    .subscribe(data=>{
      alert("Cliente criado com sucesso!");
      this.router.navigate(["listar"]);
    })
    
  }
  

}
