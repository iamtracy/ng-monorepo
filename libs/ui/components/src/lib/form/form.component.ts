import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-form',
  styles: [],
  template: ` <p>form works!</p> `,
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
