import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickTrackerModule } from "../../../click-tracker/src/lib/click-tracker.module";
import { createCustomElement } from "@angular/elements";
import { ClickTrackerComponent } from "../../../click-tracker/src/lib/click-tracker.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClickTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ClickTrackerElm = createCustomElement(ClickTrackerComponent, {injector: this.injector});
    customElements.define('ct-click-tracker', ClickTrackerElm);
  }
}
