import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = +route.url[1].path;

    if (isNaN(id) || id < 0) {
      alert('invalid URL path');
      this._router.navigate(['/products']);
      return false;
    }
      return true;
  }
}
