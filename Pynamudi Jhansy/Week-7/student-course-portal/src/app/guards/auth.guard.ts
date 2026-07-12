import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);


  const isLoggedIn = true;


  if (isLoggedIn) {

    return true;

  } else {

    router.navigate(['/']);

    return false;

  }

};