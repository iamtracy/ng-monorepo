import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'

import { ButtonModule } from './../button/button.module'
import { DialogModule } from './dialog.module'
import { DialogService } from './dialog.service'
import { FormFieldGroup } from '../form/utilities/form-field-group'

export default {
  title: 'Dialog',
}

interface Foo {
  bar: string
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-dialog-confirm',
  template: `<ui-button
    (click)="handleClick()"
    text="Open Confirm Dialog"
  ></ui-button>`,
})
class ConfirmTestComponent {
  constructor(private dialogService: DialogService) {}

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

    this.dialogService.confirmed<Foo>().subscribe((value) => {
      value === null
        ? console.log('cancelled', value.bar)
        : console.log('confirmed', value)
    })
  }
}

export const Confirm = () => ({
  component: ConfirmTestComponent,
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      ButtonModule,
      DialogModule,
      MatDialogModule,
    ],
    providers: [DialogService],
  },
})

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-dialog-test',
  template: `<ui-button
    (click)="handleClick()"
    text="Open Form Dialog"
  ></ui-button>`,
})
class FormTestComponent {
  constructor(private dialogService: DialogService) {}

  handleClick() {
    this.dialogService.open({
      fields: [
        FormFieldGroup([
          {
            flexWidth: 'flex-1',
            initialValue: null,
            key: 'firstName',
            label: 'First Name',
            required: true,
            type: 'input',
          },
          {
            flexWidth: 'flex-1',
            initialValue: 'Ventura',
            key: 'lastName',
            label: 'Last Name',
            required: true,
            type: 'input',
          },
        ]),
        FormFieldGroup([
          {
            flexWidth: 'flex-1',
            key: 'nickName',
            label: 'Nick Name',
            type: 'input',
          },
        ]),
      ],
      title: 'Ave Ventura',
    })

    this.dialogService.confirmed().subscribe((value) => {
      value ? console.log('confirmed', value) : console.log('cancelled', value)
    })
  }
}

export const Form = () => ({
  component: FormTestComponent,
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      ButtonModule,
      DialogModule,
      MatDialogModule,
    ],
    providers: [DialogService],
  },
})
