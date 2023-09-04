import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/forms/create/create.component';
import { DeleteComponent } from './components/forms/delete/delete.component';
import { EditComponent } from './components/forms/edit/edit.component';
import { ShowComponent } from './components/forms/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'show/:id',
    component: ShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
