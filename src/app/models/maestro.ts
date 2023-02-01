export interface Roles {
    editor?: boolean;
    admin?: boolean;
  }
export interface MaestroInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;
  }