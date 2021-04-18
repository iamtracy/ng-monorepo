import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import type { Observable } from 'rxjs'

import { DialogComponent, IDialogComponent } from './dialog.component'

@Injectable()
export class DialogService<T> {
  dialogRef: MatDialogRef<DialogComponent<T>>

  constructor(private dialog: MatDialog) {}

  open({
    cancelText,
    confirmText,
    fields,
    message,
    title,
  }: IDialogComponent): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        cancelText,
        confirmText,
        fields,
        message,
        title,
      },
    })
  }

  confirmed(): Observable<T> {
    return this.dialogRef.afterClosed()
  }
}
