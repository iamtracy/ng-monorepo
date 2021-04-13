import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

export enum ButtonTheme {
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
    <button mat-raised-button [disabled]="disabled" [type]="type" [color]="color">
      {{text}}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() type: Type = Type.Button
  @Input() text = 'Click'
  @Input() color: ButtonTheme = ButtonTheme.Primary
  @Input() disabled = false
}
