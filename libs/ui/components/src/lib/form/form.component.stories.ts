import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ButtonModule } from '../button/button.module'
import { FormComponent } from './form.component'
import {
  FormFieldFlexWidth,
  FormFieldGroup,
  FormFieldInputTypes,
} from './utilities/form-field-group'

export default {
  title: 'Form',
}

export const Primary = () => ({
  component: FormComponent,
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormlyMaterialModule,
      FormlyModule.forRoot(),
      ButtonModule,
    ],
  },
  props: {
    fields: [
      FormFieldGroup([
        {
          flexWidth: FormFieldFlexWidth.One,
          initialValue: 'Ace',
          key: 'NickName',
          label: 'Last Name',
          required: true,
          type: FormFieldInputTypes.Input,
        },
        {
          flexWidth: FormFieldFlexWidth.One,
          initialValue: 'Ventura',
          key: 'lastName',
          label: 'Last Name',
          required: true,
          type: FormFieldInputTypes.Input,
        },
      ]),
      FormFieldGroup([
        {
          flexWidth: FormFieldFlexWidth.One,
          key: 'nickName',
          label: 'Nick Name',
          type: FormFieldInputTypes.Input,
        },
      ]),
    ],
  },
})
