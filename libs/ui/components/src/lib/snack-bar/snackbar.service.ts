import { Injectable } from '@angular/core'
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar'

@Injectable()
export class SnackBarService {
  snackBarRef: MatSnackBarRef<TextOnlySnackBar>

  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action?: string) {
    this.snackBarRef = this.snackBar.open(message, action, {
      announcementMessage: message,
      duration: 1400,
      horizontalPosition: 'center',
      politeness: 'polite',
      verticalPosition: 'top',
    })
  }
}
