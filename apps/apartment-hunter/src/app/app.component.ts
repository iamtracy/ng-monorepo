import { ButtonTheme } from '@ng-monorepo/ui/components'
import { Component } from '@angular/core'

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonTheme = ButtonTheme

  handleAdd() {
    console.log('add')
  }

  handleDelete() {
    console.log('delete')
  }
}
