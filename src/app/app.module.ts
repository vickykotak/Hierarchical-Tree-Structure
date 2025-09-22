import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Solution1Component } from './solution1/solution1.component';
import { Solution2Component } from './solution2/solution2.component';

@NgModule({
  declarations: [
    AppComponent,
    Solution1Component,
    Solution2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
