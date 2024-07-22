import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';

const routes: Routes = [
  {
    component: EmployeecrudComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
