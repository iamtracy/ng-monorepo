import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { NgModule } from '@angular/core'

import { TableComponent } from './table.component'

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
  ],
})
export class TableModule {}
