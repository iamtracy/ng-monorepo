import { Component, OnInit } from '@angular/core'
import { ManageListingsFacade } from '@ng-monorepo/listings/domain'

@Component({
  selector: 'listings-manage-listings',
  template: `<h1>listings-manage listings</h1>

    <table class="table">
      <tr *ngFor="let listing of listingList$ | async">
        <td>{{ listing.id }}</td>
        <td>{{ listing.name }}</td>
        <td>{{ listing.description }}</td>
      </tr>
    </table>`,
})
export class ManageListingsComponent implements OnInit {
  listingList$ = this.manageListingsFacade.listingList$

  constructor(private manageListingsFacade: ManageListingsFacade) {}

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.manageListingsFacade.load()
  }
}
