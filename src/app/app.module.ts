import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ProdutoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProdutoViewModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(ProdutoComponent, { injector: this.injector });
    customElements.define('product-view', el);
  }

}
