import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu : string = '';

  constructor(private sEducacion: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(educacion).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['']);    
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }

}
