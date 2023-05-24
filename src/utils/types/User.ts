export interface User {
  status?: boolean;
  user: {
    id?: number;
    email?: String;
    name?: String;
    googleId?: any;
    bio?: String;
    status?: any;
    createdAt?: String;
    updatedAt?: String;
    deletedAt?: any;
    token?: any;
  };
}

export interface Users {
  status?: boolean
  users: [{
    id: number
    name: String
    email?: String
    bio?: String
  }]
}

export interface LoginType {
  email?: String;
  password?: String;
}

export interface CreateUser {
  email?: String;
  password?: String;
  name?: String
  bio?: String
}
