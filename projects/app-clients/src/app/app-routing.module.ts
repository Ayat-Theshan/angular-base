import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter, withViewTransitions } from '@angular/router';

const routes: Routes = [
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
  providers: [provideRouter(routes, withViewTransitions())],
})
export class AppRoutingModule { }
