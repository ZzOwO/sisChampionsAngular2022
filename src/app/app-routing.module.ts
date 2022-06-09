import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { ListPlaceComponent } from './components/list-place/list-place.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';

const routes: Routes = [
  {path:'list-school', component:ListSchoolComponent},
  {path:'add-school', component:CreateSchoolComponent},
  {path:'add-place', component:AddPlaceComponent},
  {path: 'list-place', component:ListPlaceComponent},
  //{path:'add-school/id', component:CreateSchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
