import { MatSnackBarModule } from '@angular/material/snack-bar'
import { SpectatorService, createServiceFactory } from '@ngneat/spectator'

import { SnackBarService } from './snackbar.service'

describe('DialogService', () => {
  let spectator: SpectatorService<SnackBarService>
  const createService = createServiceFactory({
    imports: [MatSnackBarModule],
    service: SnackBarService,
  })

  it('should open and close a snackbar', () => {
    spectator = createService()

    spectator.service.open('foo')

    expect(spectator.service.snackBarRef).toBeInstanceOf(SnackBarService)
  })
})
