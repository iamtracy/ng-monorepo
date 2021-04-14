import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule],
  exports: [FormComponent],
})
export class FormModule {}
