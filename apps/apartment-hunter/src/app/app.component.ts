import { ButtonColor } from '@ng-monorepo/ui/components'
import { Component } from '@angular/core'

@Component({
  selector: 'ui-root',
  template: `
    <ui-card
      title="Title"
      subtitle="Subtitle"
      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    >
      <ui-button
        (click)="handleAdd()"
        [color]="buttonTheme.Primary"
        text="Add"
      ></ui-button>
      <ui-button
        (click)="handleDelete()"
        [color]="buttonTheme.Warn"
        text="Delete"
      ></ui-button>
    </ui-card>
  `,
})
export class AppComponent {
  buttonTheme = ButtonColor

  handleAdd() {
    console.log('add')
  }

  handleDelete() {
    console.log('delete')
  }
}
