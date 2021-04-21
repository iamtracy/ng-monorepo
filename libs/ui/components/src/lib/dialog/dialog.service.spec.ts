import { MatDialogRef } from '@angular/material/dialog'
import { SpectatorService, createServiceFactory } from '@ngneat/spectator'

import { DialogModule } from './dialog.module'
import { DialogService } from './dialog.service'

describe('DialogService', () => {
  let spectator: SpectatorService<DialogService<unknown>>
  const createService = createServiceFactory({
    imports: [DialogModule],
    service: DialogService,
  })

  it('should open and close a dialog', () => {
    spectator = createService()

    spectator.service.open({ message: 'Foo', title: 'Bar' })
    expect(spectator.service.dialogRef).toBeInstanceOf(MatDialogRef)

    spectator.service.afterClosed().subscribe(() => {
      expect(spectator.service.dialogRef).toBeNull()
    })
  })
})
