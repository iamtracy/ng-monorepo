import { Spectator, createComponentFactory } from '@ngneat/spectator'
import { DialogModule } from './dialog.module'
import { DialogComponent } from './dialog.component'

describe('DialogComponent', () => {
  let spectator: Spectator<DialogComponent>
  const createComponent = createComponentFactory({
    component: DialogComponent,
    imports: [DialogModule],
    shallow: true,
  })

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
