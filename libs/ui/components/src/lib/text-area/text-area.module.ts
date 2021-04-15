import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'

import { TextAreaComponent } from './text-area.component'

@NgModule({
  declarations: [TextAreaComponent],
  exports: [TextAreaComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
})
export class TextAreaModule {}
