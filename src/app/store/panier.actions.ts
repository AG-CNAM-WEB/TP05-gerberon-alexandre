// panier.actions.ts
import { Action } from '@ngxs/store';

export class AjouterProduit {
  static readonly type = '[Panier] Ajouter produit';
  constructor(public produit: string) {}
}

export class SupprimerProduit {
  static readonly type = '[Panier] Supprimer produit';
  constructor(public produit: string) {}
}
