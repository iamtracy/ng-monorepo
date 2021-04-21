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
    <ng-container *ngIf="href; else isButton">
      <a mat-flat-button [href]="href" target="_blank">{{ text }}</a>
    </ng-container>
    <ng-template #isButton>
      <button
        mat-flat-button
        [disabled]="disabled"
        [type]="type"
        [color]="color"
      >
        {{ text }}
      </button>
    </ng-template>
  `,
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Primary
  @Input() disabled = false
  @Input() text = 'Click'
  @Input() type: ButtonType = ButtonType.Button
  @Input() href: string
}
