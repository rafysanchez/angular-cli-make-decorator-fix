import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopupModule } from 'ng2-opd-popup';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
