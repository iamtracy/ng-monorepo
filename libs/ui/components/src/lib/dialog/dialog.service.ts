import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import type { Observable } from 'rxjs'

import { DialogComponent, DialogOnClose, IDialogComponent } from './dialog.component'

@Injectable()
export class ConfirmDialogService {
  dialogRef: MatDialogRef<DialogComponent>

  constructor(private dialog: MatDialog) {}

  open({ title, message, cancelText, confirmText }: IDialogComponent): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        cancelText,
        confirmText,
        message,
        title,
      },
    })
  }

  confirmed(): Observable<DialogOnClose | undefined> {
    return this.dialogRef.afterClosed()
  }
}
