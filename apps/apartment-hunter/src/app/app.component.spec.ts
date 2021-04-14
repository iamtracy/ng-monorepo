import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>
  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
  })

  it('should create', () => {
    spectator = createComponent()
    expect(spectator.component).toBeDefined()
  })
})
