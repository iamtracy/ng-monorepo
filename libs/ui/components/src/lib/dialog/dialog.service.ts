import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs'
import { map, take } from 'rxjs/operators'
import { DialogComponent } from './dialog.component';

@Injectable()
export class ConfirmDialogService {
  dialogRef: MatDialogRef<DialogComponent>

  constructor(private dialog: MatDialog) { }

  open(options) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    })
  }

  confirmed(): Observable<unknown> {
    return this.dialogRef.afterClosed()
      .pipe(
        take(1),
        map(res => res)
      )
  }
}
