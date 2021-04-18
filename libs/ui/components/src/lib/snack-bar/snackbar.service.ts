import { Injectable } from '@angular/core'
import {
  MatSnackBar,
  MatSnackBarDismiss,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar'
import { Observable } from 'rxjs'

@Injectable()
export class SnackBarService {
  snackBarRef: MatSnackBarRef<TextOnlySnackBar>

  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action?: string): MatSnackBarRef<TextOnlySnackBar> {
    this.snackBarRef = this.snackBar.open(message, action, {
      announcementMessage: message,
      duration: 1400,
      horizontalPosition: 'center',
      politeness: 'polite',
      verticalPosition: 'top',
    })
    return this.snackBarRef
  }

  close(): Observable<MatSnackBarDismiss> {
    return this.snackBarRef.afterDismissed()
  }
}
