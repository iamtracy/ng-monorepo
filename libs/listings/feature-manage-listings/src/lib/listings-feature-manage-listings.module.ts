import { CommonModule } from '@angular/common'
import { ListingsDomainModule } from '@ng-monorepo/listings/domain'
import { NgModule } from '@angular/core'

import { ManageListingsComponent } from './manage-listings.component'

@NgModule({
  declarations: [ManageListingsComponent],
  exports: [ManageListingsComponent],
  imports: [CommonModule, ListingsDomainModule],
})
export class ListingsFeatureManageListingsModule {}
