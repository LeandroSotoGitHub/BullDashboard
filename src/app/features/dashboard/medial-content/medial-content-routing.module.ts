import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedialContentComponent } from './medial-content.component';

const routes: Routes = [
  {path: '', component:MedialContentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedialContentRoutingModule { }
