import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ButtonModule, SnackbarModule } from '@ng-monorepo/ui/components'
import { CardModule } from '@ng-monorepo/ui/components'

import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    SnackbarModule,
  ],
})
export class AppModule {}
