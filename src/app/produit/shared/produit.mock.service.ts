import {Produit} from './models/produit';
import {Injectable} from '@angular/core'

@Injectable()
export class ProduitMockService{

  private PRODUITS: Produit[] =[];
  constructor(){


    let p1:Produit = new Produit('Livre',50,20);
    let p2:Produit = new Produit('Book',50,20);
    let p3:Produit = new Produit('Kitabon',50,20);

    this.PRODUITS.push(p1,p2,p3);
  }

  public getProduits(): Produit[]{
    return this.PRODUITS;

  }
}
