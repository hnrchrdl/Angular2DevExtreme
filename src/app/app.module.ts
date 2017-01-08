import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModalsModule } from './modals/modals.module';
import { DxButtonModule } from 'devextreme-angular';
import { ModalComponent } from './modals/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    //ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalsModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
