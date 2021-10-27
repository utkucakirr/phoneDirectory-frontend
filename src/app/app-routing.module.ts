import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { DeleteComponent } from './components/delete/delete.component';
import { PersonComponent } from './components/person/person.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"",component:AgGridComponent},
  {path:"persons/add",component:AddComponent},
  {path:"persons/update",component:UpdateComponent  },
  {path:"persons/delete",component:DeleteComponent}
  //{path:"aggrid",component:AgGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
