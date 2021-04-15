import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'
import { Spectator, createComponentFactory } from '@ngneat/spectator'

import { FormComponent } from './form.component'
import { ReactiveFormsModule } from '@angular/forms'

describe('FormComponent', () => {
  let spectator: Spectator<FormComponent>
  const createComponent = createComponentFactory({
    component: FormComponent,
    imports: [
      BrowserAnimationsModule,
      CommonModule,
      FormlyMaterialModule,
      FormlyModule.forRoot(),
      ReactiveFormsModule,
    ],
  })

  it('should create', () => {
    spectator = createComponent()

    expect(spectator.component).toBeTruthy()
  })
})
