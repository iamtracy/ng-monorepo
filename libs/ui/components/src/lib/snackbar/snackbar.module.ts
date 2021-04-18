import { MatSnackBar } from '@angular/material/snack-bar'
import { NgModule } from '@angular/core'
import { Overlay } from '@angular/cdk/overlay'

import { SnackBarService } from './snackbar.service'

@NgModule({
  providers: [SnackBarService, MatSnackBar, Overlay],
})
export class SnackbarModule {}
