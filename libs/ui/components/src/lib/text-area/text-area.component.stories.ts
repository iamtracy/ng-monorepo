import { TextAreaComponent } from './text-area.component'
import { TextAreaModule } from './text-area.module'

export default {
  title: 'TextArea',
}

export const Primary = () => ({
  component: TextAreaComponent,
  moduleMetadata: {
    imports: [TextAreaModule],
  },
  props: {
    label: 'placeholder text',
  },
})
