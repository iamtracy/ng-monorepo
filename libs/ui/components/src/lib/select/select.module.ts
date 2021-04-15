import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatOptionModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'
import { NgModule } from '@angular/core'

import { SelectComponent } from './select.component'

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
})
export class SelectModule {}
