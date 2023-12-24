import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeImageComponent } from './features/liste-image/liste-image.component';
import { MainComponent } from './features/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ListeImageComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
