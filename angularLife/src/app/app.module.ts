import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
