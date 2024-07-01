import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // @Input() -> Forma antigua.
  // Nueva forma de llamar a un @Input
  public product = input.required<Product>();

  //@Output -> forma atigua
  // Nuevo metodo para generar un output
  public onIncrementQuantity = output<number>();


  public incrementQuantity(): void {

    this.onIncrementQuantity.emit( this.product().quantity + 1);

  }

  public loginEffect = effect( () =>{
    console.log(this.product().name);

  });


 }
