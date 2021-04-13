import { Story } from '@storybook/angular/types-6-0';
import { ButtonComponent, ButtonColor } from './button.component'
import { ButtonModule } from './button.module'

export default {
  title: 'Button'
}

const storyDeps ={
  component: ButtonComponent,
  moduleMetadata: {
    imports: [ButtonModule]
  }
}

export const Primary: Story = () => ({
  ...storyDeps,
  props: {
    color: ButtonColor.Primary,
    text: 'Primary'
  }
})

export const Accent: Story = () => ({
  ...storyDeps,
  props: {
    color: ButtonColor.Accent,
    text: 'Accent'
  }
})

export const Warn: Story = () => ({
  ...storyDeps,
  props: {
    color: ButtonColor.Warn,
    text: 'Warn'
  }
})

export const Disabled: Story = () => ({
  ...storyDeps,
  props: {
    disabled: true,
    text: 'Disabled'
  }
})
