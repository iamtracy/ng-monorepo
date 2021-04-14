import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import type { Observable } from 'rxjs'
import { DialogComponent, DialogOnClose } from './dialog.component'

@Injectable()
export class ConfirmDialogService {
  dialogRef: MatDialogRef<DialogComponent>

  constructor(private dialog: MatDialog) {}

  open(options): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    })
  }

  confirmed(): Observable<DialogOnClose | undefined> {
    return this.dialogRef.afterClosed()
  }
}
