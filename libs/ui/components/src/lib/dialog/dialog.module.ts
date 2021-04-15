import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
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
})
export class DialogModule {}
