import { FormlyFieldConfig } from '@ngx-formly/core'

export enum FormFieldFlexWidth {
  One = 'flex-1',
  Two = 'flex-2',
  Three = 'flex-3',
  Four = 'flex-3',
  Five = 'flex-5',
  Six = 'flex-6',
}

export enum FormFieldInputTypes {
  Button = 'button',
  Checkbox = 'checkbox',
  Color = 'color',
  Date = 'date',
  DateTimeLocal = 'datetime-local',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Image = 'image',
  Input = 'input',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Radio = 'radio',
  Range = 'range',
  Reset = 'reset',
  Search = 'search',
  Submit = 'submit',
  Telephone = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
}

export interface FormGroupOptions<T> {
  flexWidth: FormFieldFlexWidth
  initialValue?: T
  key: string
  label?: string
  required?: boolean
  type: FormFieldInputTypes
}

interface FieldGroup {
  fieldGroup: Array<FormlyFieldConfig>
  fieldGroupClassName: 'display-flex'
}

export function FormFieldGroup<T>(
  options: Array<FormGroupOptions<T>>
): FieldGroup {
  return {
    fieldGroup: options.map((option) => ({
      className: option.flexWidth,
      defaultValue: option.initialValue,
      key: option.key,
      templateOptions: {
        label: option.label,
        required: option.required,
      },
      type: option.type,
    })),
    fieldGroupClassName: 'display-flex',
  }
}
