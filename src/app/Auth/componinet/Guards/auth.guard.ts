import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 const service=inject(AuthService)
 const Routers=inject(Router)
  if(service.CurrentUser())return true
  else{
   Routers.navigateByUrl('/login')
    return false
  }
};
