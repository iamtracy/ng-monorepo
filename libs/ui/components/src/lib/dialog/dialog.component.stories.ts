import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Component, ChangeDetectionStrategy } from '@angular/core'
import { DialogModule } from './dialog.module'
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog'
import { ButtonModule } from './../button/button.module'
import { DialogOnClose } from './dialog.component'
import { ConfirmDialogService } from './dialog.service'

export default {
  title: 'Dialog',
}

@Component({
  selector: 'ui-dialog-test',
  template: `<ui-button
    (click)="handleClick()"
    text="Open Confirm Dialog"
  ></ui-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ConfirmTestComponent {
  constructor(private dialogService: ConfirmDialogService) {}

  handleClick() {
    this.dialogService.open({
      title: 'Distillery intelligentsia',
      message: `
        Blue bottle master cleanse man bun art party, chartreuse hot chicken twee subway tile direct trade literally.
        Activated charcoal ethical poke gochujang. Bitters godard sriracha bushwick succulents.
        Cold-pressed photo booth unicorn listicle edison bulb quinoa enamel pin direct trade yuccie fingerstache.
        Skateboard roof party mixtape narwhal, jianbing twee master cleanse squid tofu blog blue bottle cliche bicycle rights.
        Kombucha yuccie readymade, umami semiotics taxidermy man braid pinterest trust fund pok pok authentic pitchfork.
        Tousled tilde meh, cred swag man braid truffaut prism stumptown occupy four loko portland wayfarers.
      `,
    })

    this.dialogService
      .confirmed()
      .subscribe((value: DialogOnClose | undefined) => {
        value === DialogOnClose.Confirmed
          ? console.log('confirmed', value)
          : console.log('cancelled', value)
      })
  }
}

export const Default = () => ({
  moduleMetadata: {
    imports: [
      MatDialogModule,
      BrowserAnimationsModule,
      DialogModule,
      ButtonModule,
    ],
    providers: [
      ConfirmDialogService,
      {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: { hasBackdrop: true, maxWidth: '1200px' },
      },
      {
        provide: MatDialogRef,
        useValue: {},
      },
      {
        provide: MAT_DIALOG_DATA,
        useValue: {},
      },
    ],
  },
  component: ConfirmTestComponent,
})
