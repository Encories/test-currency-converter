import { State, Action, StateContext, setValue, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Login, Logout } from './auth.actions';

export interface AuthStateModel {
  apiKey: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    apiKey: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private storage: Storage) {
  }

  @Selector()
  static getValue(state: AuthStateModel) {
    return state.apiKey;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    ctx.setState(action.payload);
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>, action: Logout) {
    ctx.setState({apiKey: null});
  }
}
