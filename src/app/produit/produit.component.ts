import { Component, OnInit } from '@angular/core';

import { ProduitMockService } from "./shared/produit.mock.service";
import { Produit } from './shared/models/produit';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:Produit[];
produitForm:FormGroup;

  constructor(private produitService:ProduitMockService, private fb:FormBuilder) {
this.produitForm = this.fb.group({
          ref:['',Validators.required],
          quantité:'',
          prixUnitaire: ''
        });
  }

  ngOnInit() {

    this.produits = this.produitService.getProduits();
  }

}
