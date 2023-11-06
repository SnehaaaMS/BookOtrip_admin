import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';

import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [Login1Component, Register1Component, RecoverpasswordComponent],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
