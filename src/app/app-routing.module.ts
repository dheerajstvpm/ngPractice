import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";


const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'user', loadChildren: () => import('./modules/user/user.module')
      .then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
