import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'

import { ColumnPosition, TableComponent } from './table.component'
import { MatInputModule } from '@angular/material/input'

import { FormModule } from '../form/form.module'

export default {
  title: 'Table',
}

const TableDefaults = {
  component: TableComponent,
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatSortModule,
      MatPaginatorModule,
      MatTableModule,
      MatInputModule,
      MatInputModule,
      FormModule,
    ],
  },
}

export const Default = () => ({
  ...TableDefaults,
  props: {
    tableColumns: [
      {
        dataKey: 'foo',
        isSortable: true,
        name: 'foo',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'biz',
        isSortable: true,
        name: 'biz',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'baz',
        isSortable: true,
        name: 'baz',
        position: ColumnPosition.Left,
      },
    ],
    tableData: [
      { baz: 'baz1', biz: 'biz1', foo: 'bar1' },
      { baz: 'baz2', biz: 'biz2', foo: 'bar2' },
      { baz: 'baz3', biz: 'biz3', foo: 'bar3' },
      { baz: 'baz4', biz: 'biz4', foo: 'bar4' },
    ],
  },
})

export const Sortable = () => ({
  ...TableDefaults,
  props: {
    tableColumns: [
      {
        dataKey: 'foo',
        name: 'foo',
        position: ColumnPosition.Left,
        sortable: true,
      },
      {
        dataKey: 'biz',
        name: 'biz',
        position: ColumnPosition.Left,
        sortable: true,
      },
      {
        dataKey: 'baz',
        name: 'baz',
        position: ColumnPosition.Left,
        sortable: true,
      },
    ],
    tableData: [
      { baz: 'baz1', biz: 'biz1', foo: 'bar1' },
      { baz: 'baz2', biz: 'biz2', foo: 'bar2' },
      { baz: 'baz3', biz: 'biz3', foo: 'bar3' },
      { baz: 'baz4', biz: 'biz4', foo: 'bar4' },
    ],
  },
})

export const Pagination = () => ({
  ...TableDefaults,
  props: {
    pagination: true,
    tableColumns: [
      {
        dataKey: 'foo',
        name: 'foo',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'biz',
        name: 'biz',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'baz',
        name: 'baz',
        position: ColumnPosition.Left,
      },
    ],
    tableData: [
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
      { baz: 'baz', biz: 'biz', foo: 'bar' },
    ],
  },
})

export const Filterable = () => ({
  ...TableDefaults,
  props: {
    filterable: true,
    tableColumns: [
      {
        dataKey: 'foo',
        name: 'foo',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'biz',
        name: 'biz',
        position: ColumnPosition.Left,
      },
      {
        dataKey: 'baz',
        name: 'baz',
        position: ColumnPosition.Left,
      },
    ],
    tableData: [
      { baz: 'baz1', biz: 'biz1', foo: 'bar1' },
      { baz: 'baz2', biz: 'biz2', foo: 'bar2' },
      { baz: 'baz3', biz: 'biz3', foo: 'bar3' },
      { baz: 'baz4', biz: 'biz4', foo: 'bar4' },
    ],
  },
})
