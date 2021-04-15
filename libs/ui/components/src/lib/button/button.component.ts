import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

export enum ButtonColor {
  Accent = 'accent',
  Primary = 'primary',
  Warn = 'warn',
}

export enum ButtonType {
  Button = 'button',
  Reset = 'reset',
  Submit = 'submit',
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-button',
  template: `
    <ng-container>
      <button
        *ngIf="!href"
        mat-flat-button
        [disabled]="disabled"
        [type]="type"
        [color]="color"
      >
        {{ text }}
      </button>
    </ng-container>
    <a *ngIf="href" mat-flat-button [href]="href" target="_blank">{{ text }}</a>
  `,
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Primary
  @Input() disabled = false
  @Input() text = 'Click'
  @Input() type: ButtonType = ButtonType.Button
  @Input() href: string
}
