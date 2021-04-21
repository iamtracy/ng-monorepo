import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort, Sort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import {
  FormFieldFlexWidth,
  FormFieldGroup,
  FormFieldInputTypes,
} from '../form/utilities/form-field-group'

export enum ColumnPosition {
  Left = 'left',
  Right = 'right',
}

export interface ColumnDefinition {
  name: string
  dataKey: string
  position?: ColumnPosition
  sortable?: boolean
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-table',
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
  template: `
    <ng-container>
      <ng-container *ngIf="filterable" [matColumnDef]="this.rowActionIcon">
        <ui-form
          [fields]="searchField"
          (changeEvent)="applyFilter($event)"
        ></ui-form>
      </ng-container>

      <table
        class="mat-elevation-z2"
        mat-table
        [dataSource]="dataSource"
        matSort
        (matSortChange)="sortTable($event)"
      >
        <ng-container
          *ngFor="let tableColumn of tableColumns"
          [matColumnDef]="tableColumn.name"
        >
          <ng-container *ngIf="tableColumn.sortable; else notSortable">
            <th
              mat-header-cell
              *matHeaderCellDef
              [mat-sort-header]="tableColumn.name"
              [arrowPosition]="
                tableColumn.position === 'right' ? 'before' : 'after'
              "
            >
              {{ tableColumn.name | uppercase }}
            </th>
          </ng-container>
          <ng-template #notSortable>
            <th
              mat-header-cell
              *matHeaderCellDef
              [class.text-right]="tableColumn.position == 'right'"
            >
              {{ tableColumn.name | uppercase }}
            </th>
          </ng-template>

          <td
            mat-cell
            *matCellDef="let element"
            [class.text-right]="tableColumn.position == 'right'"
          >
            {{ element[tableColumn.dataKey] }}
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>

      <mat-paginator
        *ngIf="pagination"
        class="mat-elevation-z2"
        [pageSizeOptions]="paginationSizes"
        [pageSize]="defaultPageSize"
        showFirstLastButtons
      >
      </mat-paginator>
    </ng-container>
  `,
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) matPaginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  @Input() pagination = false
  @Input() sortable = false
  @Input() filterable = false
  @Input() tableColumns: Array<ColumnDefinition> = []
  @Input() set tableData(data: Array<T>) {
    this.dataSource = new MatTableDataSource<T>(data)
  }

  dataSource = new MatTableDataSource([])
  displayedColumns: string[]
  paginationSizes = [5, 10, 15]
  defaultPageSize = this.paginationSizes[1]
  searchField = [
    FormFieldGroup([
      {
        flexWidth: FormFieldFlexWidth.One,
        key: 'filter',
        label: 'Filter',
        type: FormFieldInputTypes.Input,
      },
    ]),
  ]

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map(
      (tableColumn: ColumnDefinition) => tableColumn.name
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator
    this.dataSource.paginator = this.matPaginator
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: { filter: string }): void {
    this.dataSource.filter = filterValue.filter.trim().toLowerCase()
  }

  sortTable(sortParameters: Sort): void {
    sortParameters.active = this.tableColumns.find(
      (column) => column.name === sortParameters.active
    ).dataKey
  }
}
