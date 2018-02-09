import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the components you want to set routing for
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// here we setup our paths for routing
const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
