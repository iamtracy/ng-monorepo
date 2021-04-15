import { FormlyFieldConfig } from '@ngx-formly/core'
type LayoutWidthClassNames =
  | 'flex-1'
  | 'flex-2'
  | 'flex-3'
  | 'flex-3'
  | 'flex-5'
  | 'flex-6'
type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'input'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export interface FormGroupOptions<T> {
  flexWidth: LayoutWidthClassNames
  initialValue?: T
  key: string
  label?: string
  required?: boolean
  type: InputTypes
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
