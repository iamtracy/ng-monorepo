import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormlyMaterialModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
  ],
})
export class FormModule {}
