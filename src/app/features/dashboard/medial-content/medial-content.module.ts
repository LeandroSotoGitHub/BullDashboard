import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedialContentRoutingModule } from './medial-content-routing.module';
import { MedialContentComponent } from './medial-content.component';


@NgModule({
  declarations: [
    MedialContentComponent
  ],
  imports: [
    CommonModule,
    MedialContentRoutingModule
  ]
})
export class MedialContentModule { }
