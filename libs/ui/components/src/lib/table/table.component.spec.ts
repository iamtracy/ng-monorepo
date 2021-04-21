import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let spectator: Spectator<TableComponent<unknown>>
  const createComponent = createComponentFactory(TableComponent)

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
