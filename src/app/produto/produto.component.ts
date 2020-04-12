import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoList } from './models/produto-list.model';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'product-view',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProdutoComponent implements OnInit {

  productForm: FormGroup;
  _message: string;
  public productlist: Array<ProdutoList> = new Array<ProdutoList>();

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.createForm();
    this.findProducts();
  }

  async findProducts() {
    await this.produtoService.get().subscribe(listProd => {
      if (listProd && listProd.length) {
        this.productlist = new Array<ProdutoList>();
        listProd.forEach(prod => {
          this.productlist.push({
            id: prod.id,
            nome: prod.nome,
            preco: prod.preco,
            quantidade: prod.quantidade,
            qty: 0
          })
        })
      }
    }, err => {
      console.log('err', err);
    })
  }

  createForm() {
    this.productForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      quantidade: ['', Validators.required],
    })
  }

  public addToCart(product) {
    if (product.qty === product.quantidade) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('cart-view');
      if (productcartele != null) {
        productcartele['message'] = product;
      }
    }
  }


  @Input()
  set message(message: string) {
    let productObj = message;
    for (let product of this.productlist) {
      if (product.nome === productObj['nome']) {
        product.qty = productObj['qty'];
        break;
      }
    }

  }
  get message(): string { return this._message; }

  cadastro() {
    if (this.productForm.valid) {
      this.produtoService.post(this.productForm.value).subscribe(res => {
        console.log('res', res);
        this.findProducts();
        this.productForm.reset();
      }, err => {
        console.log('err', err);
      })
    }
  }

}
