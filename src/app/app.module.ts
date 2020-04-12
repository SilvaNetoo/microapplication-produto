import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ProdutoComponent
  ],
  bootstrap: [],
  providers: [
    ProdutoService
  ]
})
export class ProdutoViewModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(ProdutoComponent, { injector: this.injector });
    customElements.define('product-view', el);
  }

  ngDoBootstrap() {
  }

}
