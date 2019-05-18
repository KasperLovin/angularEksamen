import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { map, switchMap, tap } from 'rxjs/operators';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
 
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private AuthService: AuthService, private router: Router) {}
 
  canActivate(route, state: RouterStateSnapshot) {
    return this.AuthService.user$.map(user => {
      if (user) return true; 

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}