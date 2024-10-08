import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token=localStorage.getItem("access_token");
  if(token){
    req.clone({
      setHeaders:{
        "Authorization": `Bearer ${token}`
      }
    })
  }
  return next(req);
};
