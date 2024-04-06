// panier.state.ts
import { State, Action, StateContext } from '@ngxs/store';
import { AjouterProduit, SupprimerProduit } from './panier.actions';
import { Injectable } from '@angular/core';

export interface PanierStateModel {
  items: string[];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    items: []
  }
})

@Injectable()
export class PanierState {

  @Action(AjouterProduit)
  ajouterProduit(ctx: StateContext<PanierStateModel>, action: AjouterProduit) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, action.produit]
    });
  }

  @Action(SupprimerProduit)
  supprimerProduit(ctx: StateContext<PanierStateModel>, action: SupprimerProduit) {
    const state = ctx.getState();
    const index = state.items.indexOf(action.produit);
    if (index !== -1) {
      state.items.splice(index, 1);
      ctx.setState({
        ...state,
        items: [...state.items]
      });
    }
  }
}
