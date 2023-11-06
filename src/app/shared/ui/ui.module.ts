import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagetitleComponent } from './pagetitle/pagetitle.component';

@NgModule({
  declarations: [PagetitleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PagetitleComponent]
})
export class UIModule { }
