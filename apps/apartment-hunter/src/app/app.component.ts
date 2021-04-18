import { ButtonColor, SnackBarService } from '@ng-monorepo/ui/components'
import { Component } from '@angular/core'

@Component({
  selector: 'ui-root',
  template: `
    <ui-card
      content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      subtitle="Subtitle"
      title="Title"
    >
      <ui-button
        (click)="handleAdd($event)"
        [color]="buttonTheme.Primary"
        text="Add"
      ></ui-button>
      <ui-button
        (click)="handleDelete($event)"
        [color]="buttonTheme.Warn"
        text="Delete"
      ></ui-button>
    </ui-card>
  `,
})
export class AppComponent {
  buttonTheme = ButtonColor

  constructor(private snackBarService: SnackBarService) {}

  handleAdd(event) {
    this.snackBarService.open(`${event.target.innerText} Button Clicked`)
  }

  handleDelete(event) {
    console.log('delete', event)
  }
}
