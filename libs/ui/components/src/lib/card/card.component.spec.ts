import { MatCardModule } from '@angular/material/card'
import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>
  const createComponent = createComponentFactory({
    component: CardComponent,
    imports: [MatCardModule],
    shallow: true,
  })

  it('should create card with title, subtitle, and content', () => {
    spectator = createComponent({
      props: {
        content: 'Baz',
        subtitle: 'Biz',
        title: 'Foo',
      },
    })

    expect(spectator.query('mat-card-title').innerHTML.trim()).toBe('Foo')
    expect(spectator.query('mat-card-subtitle').innerHTML.trim()).toBe('Biz')
    expect(spectator.query('mat-card-content p').innerHTML.trim()).toBe('Baz')
  })

  it('should create empty card', () => {
    spectator = createComponent()

    expect(spectator.query('mat-card-title')).toBeNull()
    expect(spectator.query('mat-card-subtitle')).toBeNull()
    expect(spectator.query('mat-card-content')).toBeNull()
  })
})
