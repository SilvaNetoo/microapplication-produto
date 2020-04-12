import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ProdutoComponent
  ],
  bootstrap: []
})
export class ProdutoViewModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(ProdutoComponent, { injector: this.injector });
    customElements.define('product-view', el);
  }

  ngDoBootstrap() {
  }

}
