import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'

import { ButtonComponent } from './button.component'

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ButtonModule {}
