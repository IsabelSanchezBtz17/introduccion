import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoComponent } from './componets/saludo/saludo.component';



@NgModule({
  declarations: [
    SaludoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SaludoComponent]
})
export class FirstModule { }
