import { MatButtonModule } from '@angular/material/button'
import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { ButtonColor, ButtonComponent, ButtonType } from './button.component'

describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>
  const createComponent = createComponentFactory({
    component: ButtonComponent,
    imports: [MatButtonModule],
    shallow: true,
  })

  it('should create', () => {
    spectator = createComponent({
      props: {
        text: 'Foo',
        type: ButtonType.Submit,
      },
    })

    expect(spectator.query('.mat-button-wrapper').innerHTML.trim()).toBe('Foo')
    expect(spectator.query('button').getAttribute('type')).toBe(
      ButtonType.Submit
    )
  })

  it('should have a primary color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Primary,
      },
    })

    expect(
      spectator.query('button').classList.contains('mat-primary')
    ).toBeTruthy()
  })

  it('should have a accent color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Accent,
      },
    })

    expect(
      spectator.query('button').classList.contains('mat-accent')
    ).toBeTruthy()
  })

  it('should have a warn color', () => {
    spectator = createComponent({
      props: {
        color: ButtonColor.Warn,
      },
    })

    expect(
      spectator.query('button').classList.contains('mat-warn')
    ).toBeTruthy()
  })

  it('should have a disabled mode', () => {
    spectator = createComponent({
      props: {
        disabled: true,
      },
    })

    expect(spectator.query('button').getAttribute('disabled')).toBe('true')
  })

  it('should have have a link', () => {
    spectator = createComponent({
      props: {
        href: 'rick roll',
      },
    })

    expect(spectator.query('a').getAttribute('href')).toBe('rick roll')
  })
})
