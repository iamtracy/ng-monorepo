import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import { ButtonColor, ButtonType } from './../button/button.component'

export interface IDialogComponent {
  fields?: Array<FormlyFieldConfig>
  title: string
  cancelText?: string
  confirmText?: string
  message?: string
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-dialog',
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
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <div mat-dialog-content *ngIf="data.message">
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-content *ngIf="data.fields; else isConfirmDialog">
      <ui-form (submitEvent)="handleFormSubmit($event)" [fields]="data.fields">
        <ui-button text="Submit" [type]="buttonType.Submit"></ui-button>
        <ui-button
          [color]="buttonColor.Warn"
          [type]="buttonType.Reset"
          text="Reset"
        ></ui-button>
        <ui-button
          [color]="buttonColor.Accent"
          [mat-dialog-close]="false"
          text="Close"
        ></ui-button>
      </ui-form>
    </div>
    <ng-template #isConfirmDialog>
      <div mat-dialog-actions *ngIf="!data.fields">
        <ui-button
          [mat-dialog-close]="false"
          [text]="data.confirmText || 'Submit'"
        ></ui-button>
        <ui-button
          [mat-dialog-close]="false"
          [color]="buttonColor.Warn"
          [text]="data.cancelText || 'Cancel'"
        ></ui-button>
      </div>
    </ng-template>
  `,
})
export class DialogComponent<T> {
  buttonColor = ButtonColor
  buttonType = ButtonType

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string
      confirmText: string
      fields: Array<FormlyFieldConfig>
      message: string
      title: string
    },
    private dialogRef: MatDialogRef<DialogComponent<T>>
  ) {}

  handleFormSubmit(formValue: T) {
    this.dialogRef.close(formValue)
  }
}
