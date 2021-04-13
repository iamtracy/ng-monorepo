import { ButtonColor } from '@ng-monorepo/ui/components'
import { Component } from '@angular/core'

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
