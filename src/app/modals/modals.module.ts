import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsService}  from './modals.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent],
  providers: [ModalsService],
  exports: [ModalComponent]
})
export class ModalsModule { }
