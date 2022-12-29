import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core"
import {BrowseService} from "../../services/browse.service"
import {map, Observable, Subscription} from "rxjs"
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

  constructor(private service: BrowseService, private cdr: ChangeDetectorRef) {
  }

  //fixme
  // get profiles$(): Observable<ShortProfile[]> {
  //   return this.service.getProfiles()
  // }

  ngOnInit(): void {
    this.profiles$ = this.service.getProfiles().pipe(map(v => v.map(p => <BrowseShortProfile>{profile: p})))
  }

  next(): void {
    this.profiles$ = this.service.next().pipe(map(v => v.map(p => <BrowseShortProfile>{profile: p})))
  }

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
  }
}
