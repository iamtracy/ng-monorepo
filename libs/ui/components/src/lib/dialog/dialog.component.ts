import { ButtonColor } from '@ng-monorepo/ui/components'
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

export enum DialogOnClose {
  Confirmed,
  Cancelled,
}

@Component({
  selector: 'ui-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <ui-button
        [mat-dialog-close]="dialogOnClose.Confirmed"
        [text]="data.confirmText || 'Submit'"
      ></ui-button>
      <ui-button
        [mat-dialog-close]="dialogOnClose.Cancelled"
        [color]="buttonColor.Warn"
        [text]="data.cancelText || 'Cancel'"
      ></ui-button>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep mat-dialog-actions {
        margin-top: 1.5rem;
        display: block;
      }
      :host ::ng-deep ui-button {
        margin-right: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  buttonColor = ButtonColor
  dialogOnClose = DialogOnClose

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string
      confirmText: string
      message: string
      title: string
    }
  ) {}
}
