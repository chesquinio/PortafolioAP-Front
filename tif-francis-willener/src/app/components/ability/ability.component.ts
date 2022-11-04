import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private sEducacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargaEducacion();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargaEducacion():void {
    this.sEducacion.lista().subscribe(
      data => {this.educacion = data;}
    )
  }

  delete(id?: number) {
    if(id != undefined) {
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargaEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
