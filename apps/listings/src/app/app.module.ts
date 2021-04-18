import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { ListingsFeatureManageListingsModule } from '@ng-monorepo/listings/feature-manage-listings'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListingsFeatureManageListingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
