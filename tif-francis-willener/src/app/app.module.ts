import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { AbilityComponent } from './components/ability/ability.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { ExpComponent } from './components/exp/exp.component';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NewEducacionComponent } from './components/ability/new-educacion.component';
import { EditEducacionComponent } from './components/ability/edit-educacion.component';
import { HysComponent } from './components/hys/hys.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewProyectComponent } from './components/proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyect/edit-proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    AbilityComponent,
    ProyectComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
    LoginComponent,
    ExpComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutComponent,
    NewProyectComponent,
    EditProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
