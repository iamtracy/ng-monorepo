import { Story } from '@storybook/angular/types-6-0';
import { ButtonComponent, ButtonTheme } from './button.component'
import { ButtonModule } from './button.module'

export default {
  title: 'ButtonComponent',
}

const deps ={
  component: ButtonComponent,
  moduleMetadata: {
    imports: [ButtonModule]
  }
}

export const Primary: Story<any> = () => ({
  ...deps,
  props: {
    text: 'Primary',
    color: ButtonTheme.Primary
  }
})

export const Accent: Story<any> = () => ({
  ...deps,
  props: {
    text: 'Accent',
    color: ButtonTheme.Accent
  }
})

export const Warn: Story<any> = () => ({
  ...deps,
  props: {
    text: 'Warn',
    color: ButtonTheme.Warn
  }
})

export const Disabled: Story<any> = () => ({
  ...deps,
  props: {
    text: 'Disabled',
    disabled: true
  }
})
