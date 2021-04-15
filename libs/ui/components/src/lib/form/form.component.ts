import { ButtonColor } from '@ng-monorepo/ui/components'
import { ButtonType } from './../button/button.component'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'ui-form',
  styles: [
    `
      :host ::ng-deep ui-button {
        margin-right: 1rem;
      }
      .display-flex {
        display: flex;
      }

      .flex-1 {
        flex: 1;
      }

      .flex-2 {
        flex: 2;
      }

      .flex-3 {
        flex: 3;
      }

      .flex-4 {
        flex: 4;
      }

      .flex-5 {
        flex: 5;
      }

      .flex-6 {
        flex: 6;
      }

      [class*='flex-'] {
        padding-left: 10px;
        padding-right: 10px;
      }

      [class*='flex-']:first-child {
        padding-left: 0;
      }

      [class*='flex-']:nth-last-child(2) {
        padding-right: 0;
      }
    `,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <formly-form
        [form]="form"
        [fields]="fields"
        [model]="model"
      ></formly-form>
      <ng-content></ng-content>
    </form>
  `,
})
export class FormComponent {
  @Input() fields: FormlyFieldConfig[]
  @Input() model = {}
  @Input() options: FormlyFormOptions
  @Output() submitEvent = new EventEmitter<unknown>()
  readonly form = new FormGroup({})
  readonly buttonType = ButtonType
  readonly buttonColor = ButtonColor

  handleSubmit(): void {
    if (this.form.valid) {
      this.submitEvent.emit(this.form.value)
    }
  }
}
