import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export interface SelectOptions {
  text: string
  value: string | number | Date
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-select',
  template: `
    <mat-form-field appearance="fill">
      <mat-label *ngIf="label">Select</mat-label>
      <mat-select>
        <mat-option *ngFor="let option of options" [value]="option.value">{{
          option.text
        }}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class SelectComponent {
  @Input() label: string
  @Input() options: Array<SelectOptions>
}
