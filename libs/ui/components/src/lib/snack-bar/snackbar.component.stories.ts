import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
  MatSnackBarModule,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar'

import { ButtonModule } from '../button/button.module'
import { SnackBarService } from './snackbar.service'

export default {
  title: 'Snackbar',
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SnackBarService],
  selector: 'ui-snackbar-test',
  template: `<ui-button
    (click)="handleClick()"
    text="Open Snackbar"
  ></ui-button>`,
})
class SnackbarTestComponent {
  snackBarRef: MatSnackBarRef<TextOnlySnackBar>

  constructor(private snackBarService: SnackBarService) {}

  handleClick() {
    this.snackBarRef = this.snackBarService.open('Snackbar Text')
  }
}

export const Default = () => ({
  component: SnackbarTestComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MatSnackBarModule, ButtonModule],
  },
})
