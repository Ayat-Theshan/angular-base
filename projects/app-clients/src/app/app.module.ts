import { NgModule } from '@angular/core';
import { AppComponent } from '@clients/app/app.component';
import { AppRoutingModule } from '@clients/app/app-routing.module';
import { MainAppRoutingModule } from '@core/app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    MainAppRoutingModule,
    SharedModule,
    CoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
