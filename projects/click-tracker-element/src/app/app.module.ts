import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClickTrackerModule } from "../../../click-tracker/src/lib/click-tracker.module";
import { createCustomElement } from "@angular/elements";
import { ClickTrackerComponent } from "../../../click-tracker/src/lib/click-tracker.component";
import { ElementsStartupService } from "./elements-startup.service";

export function startupServiceFactory(elementsStartupService: ElementsStartupService) {
  return () => elementsStartupService.init();
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ClickTrackerModule
  ],
  providers: [
    ElementsStartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [ElementsStartupService],
      multi: true
    }
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ClickTrackerElm = createCustomElement(ClickTrackerComponent, { injector: this.injector });
    customElements.define('ct-click-tracker', ClickTrackerElm);
  }
}
