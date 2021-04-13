import { Spectator, createComponentFactory } from '@ngneat/spectator'
import { ButtonColor, ButtonComponent } from './button.component'
import { ButtonModule } from './button.module'

describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>
  const createComponent = createComponentFactory({
    component: ButtonComponent,
    imports: [ButtonModule],
    shallow: true
  })

  it('should create', () => {
    spectator = createComponent()
    expect(spectator.component).toBeTruthy()
  })

  it('should have primary color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Primary
      }
    })
    expect(spectator.query('button').classList.contains('mat-primary')).toBeTruthy()
  })

  it('should have accent color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Accent
      }
    })
    expect(spectator.query('button').classList.contains('mat-accent')).toBeTruthy()
  })

  it('should have warn color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Warn
      }
    })
    expect(spectator.query('button').classList.contains('mat-warn')).toBeTruthy()
  })

  it('should have disabled mode', () => {
    spectator = createComponent({
      props: {
       disabled: true
      }
    })
    expect(spectator.query('button').classList.contains('mat-button-disabled')).toBeTruthy()
  })
})
