import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { NgModule } from '@angular/core'

import { CardComponent } from './card.component'

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, MatCardModule],
})
export class CardModule {}
