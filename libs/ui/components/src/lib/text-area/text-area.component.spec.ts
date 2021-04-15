import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let spectator: Spectator<TextAreaComponent>;
  const createComponent = createComponentFactory(TextAreaComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
