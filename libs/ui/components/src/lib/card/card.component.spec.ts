import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { CardComponent } from './card.component'
import { CardModule } from './card.module'

describe('CardComponent', () => {
  let spectator: Spectator<CardComponent>
  const createComponent = createComponentFactory({
    component: CardComponent,
    imports: [CardModule],
    shallow: true
  })

  it('should create', () => {
    spectator = createComponent({
      props: {
        title: 'Foo',
        subtitle: 'Biz',
        content: 'Baz'
      },
    })
    expect(spectator.query('mat-card-title').innerHTML.trim()).toBe('Foo')
    expect(spectator.query('mat-card-subtitle').innerHTML.trim()).toBe('Biz')
    expect(spectator.query('mat-card-content p').innerHTML.trim()).toBe('Baz')

    spectator = createComponent()
    expect(spectator.query('mat-card-title')).toBeNull()
    expect(spectator.query('mat-card-subtitle')).toBeNull()
    expect(spectator.query('mat-card-content p')).toBeNull()
  })
})
