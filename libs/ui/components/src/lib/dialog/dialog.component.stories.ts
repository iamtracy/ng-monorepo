import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog'

import { ButtonModule } from './../button/button.module'
import { ConfirmDialogService } from './dialog.service'
import { DialogModule } from './dialog.module'
import { DialogOnClose } from './dialog.component'

export default {
  title: 'Dialog',
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-dialog-test',
  template: `<ui-button
    (click)="handleClick()"
    text="Open Confirm Dialog"
  ></ui-button>`,
})
class ConfirmTestComponent {
  constructor(private dialogService: ConfirmDialogService) {}

  handleClick() {
    this.dialogService.open({
      message: `
        Blue bottle master cleanse man bun art party, chartreuse hot chicken twee subway tile direct trade literally.
        Activated charcoal ethical poke gochujang. Bitters godard sriracha bushwick succulents.
        Cold-pressed photo booth unicorn listicle edison bulb quinoa enamel pin direct trade yuccie fingerstache.
        Skateboard roof party mixtape narwhal, jianbing twee master cleanse squid tofu blog blue bottle cliche bicycle rights.
        Kombucha yuccie readymade, umami semiotics taxidermy man braid pinterest trust fund pok pok authentic pitchfork.
        Tousled tilde meh, cred swag man braid truffaut prism stumptown occupy four loko portland wayfarers.
      `,
      title: 'Distillery intelligentsia',
    })

    this.dialogService.confirmed().subscribe((value) => {
      value === DialogOnClose.Confirmed
        ? console.log('confirmed', value)
        : console.log('cancelled', value)
    })
  }
}

export const Default = () => ({
  moduleMetadata: {
    component: ConfirmTestComponent,
    imports: [
      BrowserAnimationsModule,
      ButtonModule,
      DialogModule,
      MatDialogModule,
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
})
