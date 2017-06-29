import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
