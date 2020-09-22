import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcelComponent } from './marcel/marcel.component';
import { HobbysComponent } from './hobbys/hobbys.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcelComponent,
    HobbysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
