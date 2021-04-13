import { MatCardModule } from '@angular/material/card'
import { CardComponent } from './card.component'

export default {
  title: 'Card',
}

export const primary = () => ({
  moduleMetadata: {
    imports: [MatCardModule],
  },
  component: CardComponent,
  props: {
    title: 'Artisan synth kitsch',
    subtitle: 'vegan hoodie',
    content: `Iceland roof party heirloom small batch typewriter tattooed.
    Tacos austin yuccie vinyl franzen vaporware paleo swag freegan selvage disrupt kogi iPhone blog.`,
  },
})
