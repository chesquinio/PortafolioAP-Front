import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private sSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Skill(this.nombre, this.porcentaje);
    this.sSkill.save(expe).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);    
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    })
  }

}
