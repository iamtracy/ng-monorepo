import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog'
import { NgModule } from '@angular/core'

import { ButtonModule } from '../button/button.module'
import { DialogComponent } from './dialog.component'
import { FormModule } from '../form/form.module'

@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  exports: [DialogComponent],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true, maxWidth: '1200px' },
    },
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
})
export class DialogModule {}
