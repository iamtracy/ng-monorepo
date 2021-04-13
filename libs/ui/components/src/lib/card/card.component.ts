import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'ui-card',
  template: `
    <mat-card>
      <mat-card-header class="ui-card-header-text">
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title: string
  @Input() subtitle: string
  @Input() content: string
}
