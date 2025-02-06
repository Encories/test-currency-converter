import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Login, Logout } from './auth.actions';

export interface AuthStateModel {
  token: string | null;
  username: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null
  }
})
@Injectable()
export class AuthState {
  constructor(private storage: Storage) {}

  @Action(Login)
  async login(ctx: StateContext<AuthStateModel>, action: Login) {
    const { username, password } = action.payload;

    const token = 'fake-jwt-token';

    ctx.patchState({ token, username });
    await this.storage.set('auth', { token, username });
  }

  @Action(Logout)
  async logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ token: null, username: null });
    await this.storage.remove('auth');
  }
}
