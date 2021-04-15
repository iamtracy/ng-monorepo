import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'

import { RadioButtonComponent } from './radio-button.component'

export default {
  title: 'RadioButton',
}

export const primary = () => ({
  component: RadioButtonComponent,
  moduleMetadata: {
    imports: [BrowserAnimationsModule, MatButtonModule],
  },
  props: {},
})
