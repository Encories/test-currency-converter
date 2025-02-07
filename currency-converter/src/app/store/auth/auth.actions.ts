export class Login {
  static readonly type = '[Auth] Login';

  constructor(public payload: { apiKey: string }) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
