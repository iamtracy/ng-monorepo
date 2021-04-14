import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export enum ButtonColor {
  Accent = 'accent',
  Primary = 'primary',
  Warn = 'warn',
}

export enum Type {
  Button = 'button',
  Submit = 'submit',
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-button',
  template: `
    <button
      mat-raised-button
      [disabled]="disabled"
      [type]="type"
      [color]="color"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Primary
  @Input() disabled = false
  @Input() text = 'Click'
  @Input() type: Type = Type.Button
}
