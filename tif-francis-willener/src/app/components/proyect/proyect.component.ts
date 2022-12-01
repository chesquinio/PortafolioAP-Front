import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css'],
})
export class ProyectComponent implements OnInit {
  proyecto: Proyecto[] = [];
  constructor(private sProyecto: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargaProyecto();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargaProyecto():void {
    this.sProyecto.lista().subscribe(
      data => {this.proyecto = data;}
    )
  }

  delete(id?: number) {
    if(id != undefined) {
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargaProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
