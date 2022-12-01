import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/ability/edit-educacion.component';
import { NewEducacionComponent } from './components/ability/new-educacion.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectComponent } from './components/proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyect/new-proyect.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevaskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editabout/:id', component: EditAboutComponent},
  {path:'nuevoproyect', component: NewProyectComponent},
  {path:'editproyect/:id', component: EditProyectComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
