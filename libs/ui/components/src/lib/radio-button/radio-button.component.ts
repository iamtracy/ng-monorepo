import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

interface RadioGroup {
  text: string
  value: string | number | Date
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-radio-button',
  template: `
    <mat-radio-group aria-label="Select an option">
      <mat-radio-button *ngFor="let option of options" [value]="option.value">{{
        option.text
      }}</mat-radio-button>
    </mat-radio-group>
  `,
})
export class RadioButtonComponent {
  @Input() options: Array<RadioGroup>
}
