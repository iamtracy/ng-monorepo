import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-card',
  styles: [
    `
      :host ::ng-deep .mat-card-header-text {
        margin-left: 0;
      }

      :host ::ng-deep ui-button {
        margin-right: 1rem;
      }
    `,
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title *ngIf="title">{{ title }}</mat-card-title>
        <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content *ngIf="content">
        <p>{{ content }}</p>
      </mat-card-content>
      <mat-card-actions>
        <ng-content></ng-content>
      </mat-card-actions>
    </mat-card>
  `,
})
export class CardComponent {
  @Input() content: string
  @Input() subtitle: string
  @Input() title: string
}
