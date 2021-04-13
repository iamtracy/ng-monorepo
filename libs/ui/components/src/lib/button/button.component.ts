import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Primary
  @Input() disabled = false
  @Input() text = 'Click'
  @Input() type: Type = Type.Button
}
