import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-text-area',
  template: `
    <mat-form-field>
      <mat-label>{{ label }}</mat-label>
      <textarea matInput [placeholder]="placeholder"></textarea>
    </mat-form-field>
  `,
})
export class TextAreaComponent {
  @Input() label: string
  @Input() placeholder: string
}
