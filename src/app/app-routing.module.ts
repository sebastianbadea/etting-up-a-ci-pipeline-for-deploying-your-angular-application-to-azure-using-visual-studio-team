import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'red',
        component: RedComponent
      },
      {
        path: 'blue',
        component: BlueComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
