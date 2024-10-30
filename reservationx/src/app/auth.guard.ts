import { Injectable } from "@angular/core";
import {
 ActivatedRouteSnapshot, RouterStateSnapshot,
 Router
} from "@angular/router";
import { HotelComponent } from "./booking/hotel.component";
@Injectable()
export class authGuard {
 private firstNavigation = true;
 constructor(private router: Router) { }
 canActivate(route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): boolean {
 if (this.firstNavigation) {
 this.firstNavigation = false;
 if (route.component != HotelComponent) {
 this.router.navigateByUrl("/");
 return false;
 }
 }
 return true;
 }
}