import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'

import { ButtonModule } from '../button/button.module'
import { FormComponent } from './form.component'
import { FormFieldGroup } from './utilities/form-field-group'

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
          flexWidth: 'flex-1',
          initialValue: 'Ace',
          key: 'NickName',
          label: 'Last Name',
          required: true,
          type: 'input',
        },
        {
          flexWidth: 'flex-1',
          initialValue: 'Ventura',
          key: 'lastName',
          label: 'Last Name',
          required: true,
          type: 'input',
        },
      ]),
      FormFieldGroup([
        {
          flexWidth: 'flex-1',
          key: 'nickName',
          label: 'Nick Name',
          type: 'input',
        },
      ]),
    ],
  },
})
