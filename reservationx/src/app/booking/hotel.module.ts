import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { HotelComponent } from "./hotel.component";

import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";

import { RouterModule } from "@angular/router";

@NgModule({
 imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
 declarations: [HotelComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
 exports: [HotelComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }