import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({}),
    StoreModule.forRoot(routerReducer,
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: false,
          strictStateSerializability: true,
          strictActionSerializability: false,
          strictActionTypeUniqueness: true,
        }
      }),
    EffectsModule.forRoot([])
  ],
  exports: [],
  bootstrap: [],
})
export class MainAppRoutingModule { }

