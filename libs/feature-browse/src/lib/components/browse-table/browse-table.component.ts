import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core"
import {BrowseService} from "../../services/browse.service"
import {map, Observable, Subscription, tap} from "rxjs"
import {BrowseShortProfile} from "../../models/profile"

@Component({
  selector: " web-browse-table",
  templateUrl: "./browse-table.component.html",
  styleUrls: ["./browse-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseTableComponent implements OnInit, OnDestroy {
  profiles$: Observable<BrowseShortProfile[]>
  subscription$: Subscription
  loadSubscription$: Subscription

  constructor(private service: BrowseService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadSubscription$ = this.service.load().subscribe()
    this.profiles$ = this.service.profiles().pipe(
      map(v => v.map(p => <BrowseShortProfile>{profile: p})),
    )
  }

  hasNext = (): Observable<boolean> => this.service.hasNext()
  next = (): void => this.service.next()

  add(browseProfile: BrowseShortProfile): void {
    this.subscription$?.unsubscribe()
    this.subscription$ = this.service.add(browseProfile.profile.id).subscribe({
      next: s => {
        browseProfile.subscription = s
        this.cdr.detectChanges()
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe()
    this.loadSubscription$?.unsubscribe()
  }

}
