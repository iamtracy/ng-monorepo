import { CommonModule } from '@angular/common'
import { MatRadioModule } from '@angular/material/radio'
import { NgModule } from '@angular/core'

import { RadioButtonComponent } from './radio-button.component'

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [CommonModule, MatRadioModule],
})
export class RadioButtonModule {}
