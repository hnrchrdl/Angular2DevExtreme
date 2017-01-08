import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsService}  from './dialogs.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent],
  providers: [DialogsService]
})
export class DialogsModule { }
