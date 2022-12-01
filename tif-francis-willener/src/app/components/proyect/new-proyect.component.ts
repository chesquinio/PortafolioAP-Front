import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css'],
})
export class NewProyectComponent implements OnInit {
  proyecto: Proyecto;

  titulo: string;
  descripcion: string;
  img: string;

  constructor(
    private sProyecto: ProyectoService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo, this.descripcion);
    this.sProyecto.save(proyecto).subscribe(
      (data) => {
        alert('Proyecto añadido');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }



}
