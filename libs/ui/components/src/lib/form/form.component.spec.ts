import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let spectator: Spectator<FormComponent>;
  const createComponent = createComponentFactory(FormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
