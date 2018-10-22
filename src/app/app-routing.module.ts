import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RandomRepoComponent } from './pages/random-repo/random-repo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'random-repo', component: RandomRepoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
