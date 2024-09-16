export type User={
  id:string,
  userName:string,
  firstName: string,
  lastName: string,
  email: string,
  imageUrl: string,
  role:Role
}

export type RegisterUser={
  userName:string,
  email:string,
  password:string,
  confirmPassword:string,
}

export enum Role{
  ADMIN,USER
}
