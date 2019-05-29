import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/home/login/login.component';
import { RegisterComponent } from 'src/app/home/register/register.component';
import { AboutComponent } from 'src/app/home/about/about.component';
import { ServiceComponent } from 'src/app/home/service/service.component';
import { ProgramsComponent } from 'src/app/home/programs/programs.component';
import { TeamComponent } from 'src/app/home/team/team.component';
import {HomeComponent} from 'src/app/home/home.component';
import { NavbarHomeComponent } from 'src/app/home/navbar-home/navbar-home.component';
import { FooterHomeComponent } from 'src/app/home/footer-home/footer-home.component';
import {CommonModule} from '@angular/common';

const homeRoutes: Routes = [
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)],
  //exports: [RouterModule] 
})
export class HomeRoutingModule { }
