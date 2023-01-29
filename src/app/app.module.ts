import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
