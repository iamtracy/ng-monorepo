import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { DialogComponent } from './dialog.component'
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog'

describe.only('DialogComponent', () => {
  let spectator: Spectator<DialogComponent>
  const createComponent = createComponentFactory({
    component: DialogComponent,
    imports: [MatDialogModule],
    providers: [
      {
        provide: MatDialogRef,
        useValue: {},
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {
          message: 'Bar',
          title: 'Foo',
        },
      },
    ],
    shallow: true,
  })

  it('should create', () => {
    spectator = createComponent()
    expect(spectator.query('.mat-dialog-title').innerHTML).toBe('Foo')
    expect(spectator.query('.mat-dialog-content p').innerHTML).toBe('Bar')

    const [confirmButton, cancelButton] = spectator.queryAll('ui-button')
    expect(confirmButton.text).toContain('Submit')
    expect(cancelButton.text).toContain('Cancel')
  })
})
