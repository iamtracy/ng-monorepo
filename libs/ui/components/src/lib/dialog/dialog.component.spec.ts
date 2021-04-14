import { Spectator, createComponentFactory } from '@ngneat/spectator'
import { DialogModule } from './dialog.module'
import { DialogComponent } from './dialog.component'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('DialogComponent', () => {
  let spectator: Spectator<DialogComponent>
  const createComponent = createComponentFactory({
    component: DialogComponent,
    imports: [DialogModule],
    shallow: true,
  })

  it('should create', () => {
    spectator = createComponent({
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Foo',
            message: 'Bar',
          },
        },
      ],
    })

    expect(spectator.query('.mat-dialog-title').innerHTML).toBe('Foo')
    expect(spectator.query('.mat-dialog-content p').innerHTML).toBe('Bar')

    const [confirmButton, cancelButton] = spectator.queryAll(
      'ui-button'
    )
    expect(confirmButton.innerHTML).toContain('Submit')
    expect(cancelButton.innerHTML).toContain('Cancel')
  })
})
