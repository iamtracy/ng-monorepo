import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

import { Listing } from '../entities/listing'
import { ListingDataService } from '../infrastructure/listing.data.service'

@Injectable({ providedIn: 'root' })
export class ManageListingsFacade {
  private listingListSubject = new BehaviorSubject<Listing[]>([])
  listingList$ = this.listingListSubject.asObservable()

  constructor(private listingDataService: ListingDataService) {}

  load(): void {
    this.listingDataService.load().subscribe(
      (listingList) => {
        this.listingListSubject.next(listingList)
      },
      (err) => {
        console.error('err', err)
      }
    )
  }
}
